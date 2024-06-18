import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



function Dashboard() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const result = await axios.get('http://localhost:3001/users');
        setUsers(result.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete('http://localhost:3001/delete/' + id)
      .then((res) => {
        console.log(res);
        setUsers(users.filter((user) => user._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
    
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            
          </div>
          <div className="col-md-10">
            <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
              <div className="w-50 bg-white rounded p-3">
                <h3 className="justify-content-center align-items-center pb-5">
                  Users that registered in smart cities
                </h3>
                <Link to="/register" className="btn btn-success">
                  Add +
                </Link>
                {isLoading ? (
                  <div className="text-center mt-5">Loading...</div>
                ) : (
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user._id}>
                          <td>{user.email}</td>
                          <td>{user.name}</td>
                          <td>{user.date}</td>
                          <td>
                            <Link to={`/update/${user._id}`} className="btn btn-success">
                              Update
                            </Link>
                            <button className="btn btn-danger" onClick={() => handleDelete(user._id)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
