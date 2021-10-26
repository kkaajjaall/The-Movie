import React from 'react'
import con from "./contact.jpg"

const Contact = () => {
    return (
        <>
        
       
          <section className="main-contact">
        
          <h1 class="main-heading text-center"> Contact us </h1>
          <div className="flex">
            <div className="form" data-aos="zoom-in-left"  data-aos-duration="1500">
        <div class="row  g-3">
  <div class="col">
  <label>Name</label>
    <input type="text" class="form-control" aria-label="Name"/>
  </div> 
  
</div><br/> <br/> 

<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div> <br/> <br/>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress"/>
  </div>
  
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  
  
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-danger">Sign in</button>
  </div>
</form>
</div>


    <div className="loc" data-aos="zoom-in-right"  data-aos-duration="1500"  data-aos-delay="600">

        <h3> Marvel Entertainment </h3>
         <h6>Located in: The Michelangelo New York - Starhotels Collezione</h6>
         <h6> 
Address: 1290 6th Ave, New York, NY 10104, United States </h6>
<h6>Hours: 
Open ⋅ Closes 6PM</h6>
 <h6>Phone: +1 212-576-4000 </h6>
        {
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0707241402515!2d-73.98106818459357!3d40.760469179326634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25900f1b107d3%3A0xab4c80b6e25831dd!2sMarvel%20Entertainment!5e0!3m2!1sen!2sin!4v1634913763445!5m2!1sen!2sin" width="50%" height="150"  loading="lazy"></iframe>
        }</div>

      

</div>
</section>
            
        </>
    )
}

export default Contact
