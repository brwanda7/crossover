import youtube_image from '../img/vector-wjw.png';
import instagram_image from '../img/vector-mFf.png';
import twitter_image from '../img/vector-weH.png';
import facebook_image from '../img/vector.png';

import React from 'react';


function Header() {
    return(
<footer className='py-3 footer' >
<div className='container py-2'>
<div className='row'>
        <div className='py-2 d-flex justify-content-between'>
    <div className='development-header-bottom'>
      <span className='raissa-MBPw' style={{color:'white'}}> &copy; 2023 Crossover</span>
    </div>
    
    <div className='mb-lg-0'>
        <div  className='nav-lin social-links'>
       <a href="target='_blank'"> <img className='link-imges' src={youtube_image} alt='youtubeimage' /></a>
        <a href=" target='_blank'"><img className='link-imges' src={instagram_image} alt='instagram_image'/></a>
        <a href=" target='_blank'"><img className='link-imges' src={twitter_image} alt='twitter_image'/></a>
        <a href=" target='_blank'"><img className='link-imges' src={facebook_image} alt='facebook_image'/></a>
      </div>
    </div>

  </div>
  <div className='col-lg-12'>
    <span ></span>
  </div>
  
</div> 
</div>
</footer>
        );
    }
    
    export default Header;