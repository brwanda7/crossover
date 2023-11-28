import firstimage from '../img/layer-4-1.png';

import React from 'react';
import Header from '../neaded/header';
import Footer from '../neaded/footer';
import './home.css';

function NotFound() {
    return (
        <div>
            <Header/>
<section className="">
    <div className="container  py-3">
        <div className="row  align-items-center py-5">
                <div className="col-lg-12 col-12 col-sm-12 landing-page">   
               <div className="home-header">
                
               <div className="heading align-items-center">


                  <h1 className="development-header">PAGE NOT <br/> FOUND</h1>
                  <img src={firstimage} className="img-fluid" style={{width: '100%'}} alt='notfound' />
                </div>
                  
               </div>
            </div>
      
            
        </div>

    </div>

</section>
<Footer/>
        </div>

        );
    }
    
    export default NotFound;