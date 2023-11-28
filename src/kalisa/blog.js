import firstnow from '../img/image-2.png';

import React from 'react';
import Header from '../neaded/header';
import Footer from '../neaded/footer';
import './home.css';


function blog() {
return (
<div>
<Header ></Header>

<section className='blog'>
    <div className="container  py-4">
        <div className="row  align-items-center py-5">
                <div className="col-lg-12 col-12 col-sm-12 landing-page">   
               <div className="home-header">
                
               <div className="heading align-items-center">    
                  <img src={firstnow} className="img-fluid" style={{width: '100%', height: '50vh',objectFit: 'cover'}} alt='blogimage'/>
                </div>
               </div>
            </div>
            
        </div>

    </div>
  

</section>
<section>
  <div className="container">
    <div className="row">
      <div className="col-lg-9">
      <h3 className="section-title2">From Confusion to Clarity: How God Replaced Everything in My Life</h3>   
       
      <div className="py-2 down-header d-flex justify-content-between align-items-center">
    <div className="development-header-bottom" style={{fontWeight: '800!important'}}>
      Written by Raissa
    </div>
    <div className="mb-lg-0">
      Monday May 20
    </div>
  </div>
   <hr style={{color:'white!important', height: '3px'}} />
      

    <div className="detail py-2">
      <p style={{color:'white'}}>
        As a Christian, I never expected that my life would change drastically in a way I never imagined. But as I reflect on my journey, I can confidently say that the Lord works in mysterious ways. After accepting Christ as my Lord and Savior, I joined a ministry that helped me learn and serve God. However, I still felt a void, and I struggled to fit in. The COVID lockdown became an opportunity for God to speak to me, but I was too busy to listen.
        <br /><br />

I ignored the signs, and as a result, I found myself in a state of spiritual and mental confusion. I prayed, but God seemed silent, and I felt left out and unvalued in the ministry. Eventually, I quit everything, including attending church services and participating in ministry programs. I would spend my Sundays at home sleeping or visiting my aunts until one day. It wasn't until one of my friends invited me to a particular youth service at Zion Temple Celebration Centre that I reconnected with God. 
  <br /><br />
When 2022 was about to get over,  I saw a post about the crossover 2023 event that was scheduled to take place at the BK Arena (literally Crossover, is this opportunity to end and start the year in the house of the Lord). I decided to attend. I got there at 9 p.m. and went home at 5 a.m. People, that was extraordinary; I enjoyed every single thing that happened there! I reconnected with God.  
  <br /><br />

Later, this is where Apostle Dr. Paul Gitwaza declared that 2023 was a year of replacement. And yes, that declaration marked the beginning of a significant shift in my life. Since that time, I have been attending weekly and Sunday services and have found a new family of Naftal and friends who motivate and encourage me to serve the kingdom with excellence. God replaced everything about my old system and old garments.
  <br /><br />
From my experience, I learned a few important lessons that I believe can help other Christians, especially young people, who might in one way or another be going through a similar situation as I went through:
  <br /><br />
Pay attention to God's signs: God speaks to us in mysterious ways. It's important to be attentive and receptive to His guidance, especially during difficult times.
Don't be afraid to embrace change: Change can be scary, but sometimes it's necessary for our growth and development. Embracing change allows us to experience new opportunities and blessings.
Surround yourself with positive influences: Our environment and the people we associate with can impact our spiritual and mental well-being. It's essential to surround ourselves with positive influences that motivate and encourage us to serve God with excellence.
  <br /><br />
In conclusion, I am grateful for the journey that God has taken me on. He has transformed my life in ways that I never imagined, and I am now more determined than ever to serve Him with all my heart. 
  <br /><br />
I encourage other Christians, especially my fellow young people, to embrace change, pay attention to God's signs, and surround themselves with positive influences. Remember, the Lord works in mysterious ways, and His ways are always good. 
</p>
    </div>

    
  </div>
  </div>
</div>
</section>

<Footer></Footer>
</div>
    );
}

export default blog;