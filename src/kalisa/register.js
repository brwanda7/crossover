import register from '../img/divider-label-zBb.png';
import controler from '../img/controller-1.png';
import React, { useState }  from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../neaded/header';
import Footer from '../neaded/footer';
import './home.css';
import './register.css';

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dependents: [''],
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  

  const validateForm = () => {
    let isValid = true;

    if (formData.fullName.trim() === '') {
      toast.error('Full Name is required');
      isValid = false;
    }

    if (formData.email.trim() === '') {
      toast.error('Email is required');
      isValid = false;
    }

    if (formData.phone.trim() === '') {
      toast.error('Phone Number is required');
      isValid = false;
    }


    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form Data:', formData);
      toast.success('Form submitted successfully!');
    } else {
      console.log('Form has validation errors');
    }
  };

  return (
    <div className='register rgusa'>

      <Header />
       
            <section className="container py-5 ">
                 <ToastContainer position='bottom-right' className='col-lg-12'/>
  <div className="container py-5">
    <div className="row">
      <div className="col-lg-6 col-md-12 col-12">
 <div className="center-content">
    <div className="slide-AUZ">
      <div className="header-Xpu">
        <div className="building-the-future-s85">
          <span className="building-the-future-s85-sub-0">CR</span>
          <span className="building-the-future-s85-sub-1">OSS</span>
          <span className="building-the-future-s85-sub-2">OVER</span>
          <span className="building-the-future-s85-sub-3">2024</span>
        </div>
        <p className="lorem-ipsum-dolor-sit-amet-co-Syo">Step into the New Year with inspiration and celebration at Crossover2024! Join us at the BK Arena on December 31st, 2023, for an electrifying experience inspired by Psalm 65:11, promising a night crowned with goodness and abundance. Secure your spot now</p>
      </div>
      <div className="carousel-slider-Aeu">
        <img className="controller-1-tqo" src={controler} alt='registerimage'/>
      </div>
    </div>
      
      </div>
    </div>
      <div className="col-lg-6 col-md-12 col-12">
              <div className="div-section-QZF">
                <div className="header-v1o">
                  <p className="lets-get-you-started-4Nu">LET'S GET YOU STARTED</p>
                  <p className="create-an-account-CED">Register</p>
                </div>
                <form className="group-5-vg1" onSubmit={handleSubmit}>
                  <div className="input-2-f7o">
        <input
          type="text"
          id='fullcrossoverattandname'
          name='fullcrossoverattandname'
          className="input-P3o form-control"
          placeholder="Mugisha David"
          value={formData.fullName}
          onChange={(e) => handleInputChange('fullName', e.target.value)}
        />
        <div className="label-1qs">Full Names</div>
      </div>
    
  
      <div className="input-2-f7o">
        <input
          type="email"
          className="input-P3o form-control"
          placeholder="mugishadavid85@gmail.com"
          id='fullcrossoverattandemail'
          name='fullcrossoverattandemail'
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
        <div className="label-1qs">Email</div>
      </div>

      <div className="input-2-f7o">
        <input
          type="number"
          className="input-P3o form-control"
          placeholder="+250787892069"
          id='fullcrossoverattandphonenumber'
          name='fullcrossoverattandphonenumber'
          min='0'
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
        />
        <div className="label-1qs">Phone N</div>
      </div>

                  
                  <button className="btn-pry-template-1-75b" type="submit">
                    Register
                  </button>
                  <img className="divider-label-YRo" src={register} alt="Divider" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}


export default Register;
