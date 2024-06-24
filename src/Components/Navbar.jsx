import React from 'react'

const Navbar = () => {
  return (
    <div>
      

      <nav class="navbar navbar-expand-lg bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">AIRPORT APP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
        <a class="nav-link" href="/about">About</a>
        <a class="nav-link" href="/service">Services</a>
        <a class="nav-link" href="/contact">Contact</a>
        <a class="nav-link" href="/faq">FAQ</a>
        
      </div>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Navbar