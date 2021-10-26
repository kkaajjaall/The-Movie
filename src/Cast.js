import React from 'react'
 import { NavLink } from 'react-router-dom'

const Cast = () => {
    return (
        <>
   
     <section className="main-cast">
      <div className="container c">
         <h1 className="main-heading text-center"> Top  Cast  </h1>
        <div className="row mt-lg-3 pics">
         
                 
     <div className="col-lg-4  p-lg-1 col-10 offset-1 offset-lg-0 ml-lg-0  mt-lg-5 mb-lg-5 main-div">
                    
                <div class="card" data-aos="fade-right"   data-aos-duration="500"   data-aos-delay="0">
                   <div class="imgbox">
                   <NavLink  to="/char1">  <img src="./images/char 1.jpg"/> </NavLink>
                  </div>

                      <div class="textt">
                      <h4> Robert Downey Jr. </h4>
                     <p> Tony Stark </p>
                    </div>
                   </div>
        </div>
        {/* 2md========== */}
     <div className="col-lg-4  p-lg-1 col-10 offset-1 offset-lg-0 ml-lg-0  mt-lg-5 mb-lg-5 main-div">
                    
                <div class="card" data-aos="zoom-in"     data-aos-duration="500"  data-aos-delay="600">
                   <div class="imgbox">
                   <NavLink  to="/char2"><img src="./images/c2.jpg"/> </NavLink>
                  </div>

                      <div class="textt">
                      <h4>  Chris Evans  </h4>
                     <p> Steve Rogers </p>
                    </div>
                   </div>
        </div>
        {/* 3rd==== */}
     <div className="col-lg-4  p-lg-1 col-10 offset-1 offset-lg-0 ml-lg-0  mt-lg-5 mb-lg-5 main-div">
                    
                <div class="card" data-aos="fade-left"  data-aos-duration="500"     data-aos-delay="300">
                   <div class="imgbox">
                   <NavLink  to="/char3">  <img src="./images/c3.jpg"/> </NavLink>
                  </div>

                      <div class="textt">
                      <h4>  Scarlett Johansson  </h4>
                     <p> Natasha Romanoff </p>
                    </div>
                   </div>
        </div>
        {/* 4th==== */}
     <div className="col-lg-4  p-lg-1 col-10 offset-1 offset-lg-0 ml-lg-0  mt-lg-5 mb-lg-5 main-div">
                    
                <div class="card" data-aos="fade-left"   data-aos-duration="500"   data-aos-delay="0">
                   <div class="imgbox">
                   <NavLink  to="/char4"> <img src="./images/c4.jpg"/> </NavLink>
                  </div>

                      <div class="textt">
                      <h4>   Jeremy Renner </h4>
    
                     <p> Clint Barton </p>
                    </div>
                   </div>
        </div>
        {/* 5th==== */}
     <div className="col-lg-4  p-lg-1 col-10 offset-1 offset-lg-0 ml-lg-0  mt-lg-5 mb-lg-5 main-div">
                    
                <div class="card" data-aos="zoom-in"     data-aos-duration="500"  data-aos-delay="600">
                   <div class="imgbox">
                   <NavLink  to="/char5"><img src="./images/c5.jpg"/> </NavLink>
                  </div>

                      <div class="textt">
                      <h4>  Mark Ruffalo </h4>
                    
                     <p> Bruce Banner </p>
                    </div>
                   </div>
        </div>
        {/*6th=== */}
     <div className="col-lg-4  p-lg-1 col-10 offset-1 offset-lg-0 ml-lg-0  mt-lg-5 mb-lg-5 main-div">
                    
                <div class="card" data-aos="fade-right"     data-aos-duration="500"  data-aos-delay="300">
                   <div class="imgbox">
                   <NavLink  to="/char6"> <img src="./images/c6.jpg"/> </NavLink>
                  </div>

                      <div class="textt">
                      <h4> Chris Hemsworth </h4>
                     <p> Thor </p>
                    </div>
                   </div>
        </div>
     


                   


                    

                    

                     {/* <div className="col-lg-4  p-lg-1 col-10 offset-1 offset-lg-0 ml-lg-0  mt-lg-5 mb-lg-5 main-div">
                    <div className="char">   <NavLink  to="/char6"> <img src="./images/c6.jpg" width="200px" height="200px" className="picsss"/> </NavLink> </div>
                    <h4 className="sub-heading  "> Chris Hemsworth </h4>
                    <h5 className="para ">  Thor</h5>
                     </div> */}

        </div>

                 
             
         
         
         </div>
     

     </section>  
     </>
            
       
    )
}

export default Cast;

