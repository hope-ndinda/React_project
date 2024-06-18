import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (
    <div>
      <header className="bg-light sticky-top py-3 shadow-sm">
        <div className="container d-flex align-items-center justify-content-between">
          <a href="home.php" className="logo fs-4 fw-bold">Smart Cities</a>
          <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="#home" className="nav-link active">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                  <a href="#packages" className="nav-link">Packages</a>
                </li>
                <li className="nav-item">
                  <a href="register.jsx" className="nav-link">Register</a>
                </li>
                <li className="nav-item">
                  <a href="login.jsx" className="nav-link">Form</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <section className="home" id='home'>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="/src/assets/img/home-slide-6.jpeg" alt="First slide"/>
            <div className="carousel-caption d-none d-md-block text-white">
              <h3>Technology is all around us</h3>
              <p>automation, connectivity, personalization</p>
              <a href="" class="btn btn-dark">discover more</a>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="/src/assets/img/home-slide-7.jpeg" alt="Second slide"/>
            <div className="carousel-caption d-none d-md-block text-white">
              <h3>Technology is all around us</h3>
              <p>automation, connectivity, personalization</p>
              <a href="" className="btn btn-dark">discover more</a>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="/src/assets/img/home-slide-8.jpeg" alt="Third slide"/>
            <div className="carousel-caption d-none d-md-block text-white">
              <h3>make your living worthwhile</h3>
              <p>automation, connectivity, personalization</p>
              <a href="" className="btn btn-dark">discover more</a>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </section>


      <section className="services py-5" id='services'>
        <div className="container">
          <h1 className="heading-title text-center mb-5">Our Services</h1>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 text-center bg-purple text-white">
                <img src="/src/assets/img/crazy.jpeg" className="card-img-top p-4" alt="services icon" />
                <div className="card-body">
                  <h3 className="card-title">Urban Data Planning</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 text-center bg-purple text-white">
                <img src="/src/assets/img/k.png" className="card-img-top p-4" alt="services icon" />
                <div className="card-body">
                  <h3 className="card-title">Traffic Management</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 text-center bg-purple text-white">
                <img src="/src/assets/img/first.png" className="card-img-top p-4" alt="services icon" />
                <div className="card-body">
                  <h3 className="card-title">Optimization of Public Services</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 text-center bg-purple text-white">
                <img src="/src/assets/img/primary.png" className="card-img-top p-4" alt="services icon" />
                <div className="card-body">
                  <h3 className="card-title">Education</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 text-center bg-purple text-white">
                <img src="/src/assets/img/d.jpeg" className="card-img-top p-4" alt="services icon" />
                <div className="card-body">
                  <h3 className="card-title">Health Care</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 text-center bg-purple text-white">
                <img src="/src/assets/img/ou.png" className="card-img-top p-4" alt="services icon" />
                <div className="card-body">
                  <h3 className="card-title">Business Forms</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 text-center bg-purple text-white">
                <img src="/src/assets/img/what.png" className="card-img-top p-4" alt="services icon" />
                <div className="card-body">
                  <h3 className="card-title">Agriculture Services</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-about py-5" id='about'>
        <div className="container d-flex flex-wrap align-items-center">
          <div className="image flex-fill mb-4 mb-md-0">
            <img src="/src/assets/img/about1.jpg" className="img-fluid" alt="KCC" />
          </div>
          <div className="content flex-fill p-4 bg-light">
            <h3>About Us</h3>
            <p>Our vision of smart cities is to create urban areas that are more livable, sustainable, and efficient through the use of technology. This includes using data and technology to improve transportation, energy use, waste management, public safety, and other city services. Smart cities also focus on creating more inclusive and participatory communities, where citizens are engaged in the decision-making process and have access to the benefits of technology.</p>
            <a href="#about" className="btn btn-dark">Read More</a>
          </div>
        </div>
      </section>

      <section className="home-packages py-5 bg-light" id='packages'>
        <div className="container">
          <h1 className="heading-title text-center mb-5">Our Packages</h1>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100">
                <img src="/src/assets/img/river.png" className="card-img-top" alt="urban data planning" />
                <div className="card-body text-center">
                  <h3 className="card-title">Urban Data Planning</h3>
                  <p className="card-text">Urban data planning is a comprehensive approach to managing and analyzing data to inform decision-making in urban areas.</p>
                  <a href="register.jsx" className="btn btn-dark">Register Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100">
                <img src="/src/assets/img/sign.png" className="card-img-top" alt="traffic management" />
                <div className="card-body text-center">
                  <h3 className="card-title">Traffic Management</h3>
                  <p className="card-text">Traffic management refers to the strategies, tactics, and technologies used to optimize the flow of traffic on roads, highways, and other transportation networks.</p>
                  <a href="register.jsx" className="btn btn-dark">Register Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card h-100">
                <img src="/src/assets/img/smartcity.jpg" className="card-img-top" alt="optimization of public services" />
                <div className="card-body text-center">
                  <h3 className="card-title">Optimization of Public Services</h3>
                  <p className="card-text">Optimization of public services refers to the process of improving the delivery, efficiency, and effectiveness of public services provided by government agencies and organizations.</p>
                  <a href="register.jsx" className="btn btn-dark">Register Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <a href="packages.jsx" className="btn btn-dark">Load More</a>
          </div>
        </div>
      </section>

      <section className="home-offer py-5 text-white" style={{ background: 'url(/src/assets/img/kong.png) no-repeat center center / cover' }}>
        <div className="container text-center">
          <h3>We offer up to 20% discount</h3>
          <p>Get up to 20% discount by registering with us!</p>
          <a href="register.php" className="btn btn-light">Register Now</a>
        </div>
      </section>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <div className="d-flex flex-wrap justify-content-center mb-3">
            <a href="#home" className="me-3 text-white">Home</a>
            <a href="#about" className="me-3 text-white">About</a>
            <a href="#packages" className="me-3 text-white">Packages</a>
            <a href="register.js" className="me-3 text-white">Register</a>
            <a href="login.jsx" className="me-3 text-white">Form</a>
          </div>
          <div>
            <p>&copy; 2023 Smart Cities. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
