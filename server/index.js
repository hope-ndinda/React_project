const express = require("express")
const mongoose =require('mongoose')
const cors =require("cors")
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser =require('cookie-parser')
const UserModel =require('./models/users')

const app =express()
app.use(express.json());
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET","POST"],
    credentials:true
}));
app.use(cookieParser())


mongoose.connect('mongodb://localhost:27017/employee');

const varifyUser=(req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.json("Token is missing")
    }else{
        jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
            if(err){
                return res.json("Error with token")
            }else{
                if(decoded.role==="admin"){
                    next()
                }else{
                    return res.json("not admin")
                }
             }
        })
    }
}

app.get('/Dashboard',varifyUser,(req,res)=>{
    res.json("Success")
})


app.post('/register',(req,res)=>{
    const {name,email,password} =req.body;
    bcrypt.hash(password,10)
    .then(hash =>{
        UserModel.create({name,email,password:hash})
        .then (user => res.json(user))
        .catch(err => res.json(err))
    }).catch(err => res.json(err))
})


app.post('/login',(req,res)=>{
    const{email,password}= req.body;
    UserModel.findOne({email: email})
    .then(user =>{
        if(user){
          bcrypt.compare(password,user.password,(err,response) =>{
            if(response){
                const token=jwt.sign({email:user.email,role:user.role},"jwt-secret-key",{expiresIn:'1d'})
                res.cookie('token',token)
                return res.json("Success")
            }else{
                return res.json("the Password is incorrect")
            }
          })
        }else{
            return res.json("No record existed")
        }
    })
})
app.get("/employees", (req,res) => {
    UserModel.find({})
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.post("/create", (req,res) => {
    UserModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.get("/getemployee/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findById(id)
        .then(employee => res.json(employee))
        .catch(err => res.json(err));
});


app.put('/update/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate(id, {
        name: req.body.name,
        email: req.body.email,
        date: req.body.date
    }, { new: true }) 
        .then(employee => res.json(employee))
        .catch(err => res.json(err));
});

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id}) 
    .then(result => res.json(result))
    .catch(err => res.json(err))
})



app.listen(3001,()=>{
    console.log("server is running")
})