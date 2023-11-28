import firstimage from '../img/landingpage.png';
import galleryimage1 from '../img/rectangle-7-bg.png';
import galleryimage2 from '../img/rectangle-1317-bg-d9B.png';
import galleryimage3 from '../img/rectangle-9-bg.png';
import galleryimage4 from '../img/rectangle-3-bg.png';
import galleryimage5 from '../img/rectangle-11-bg.png';
import galleryimage6 from '../img/rectangle-4-bg.png';
import galleryimage7 from '../img/rectangle-8-bg.png';
import galleryimage8 from '../img/rectangle-10-bg.png';
import videoplayer from '../img/gianow.mp4';
import blogimage3 from '../img/rectangle-11-bg.png';
import personblog from '../img/ellipse-162-bg-AnV.png';

import React,{ useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../neaded/header';
import Footer from '../neaded/footer';
import './home.css';

function Home() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); 
  const [isFullScreen, setIsFullScreen] = useState(false);



  useEffect(() => {
    const video = videoRef.current;

    const updateVideoTime = () => {
      setCurrentTime(video.currentTime);
    };

    const updateVideoDuration = () => {
      setDuration(video.duration);
    };

    video.addEventListener('timeupdate', updateVideoTime);
    video.addEventListener('loadedmetadata', updateVideoDuration);

    return () => {
      video.removeEventListener('timeupdate', updateVideoTime);
      video.removeEventListener('loadedmetadata', updateVideoDuration);
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    setIsPlaying(!isPlaying);

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
  };

  const handleSkipBackward = () => {
    const video = videoRef.current;
    video.currentTime -= 10; // Skip backward 10 seconds
  };

  const handleSkipForward = () => {
    const video = videoRef.current;
    video.currentTime += 10; // Skip forward 10 seconds
  };


  const handleVolumeChange = (e) => {
    const video = videoRef.current;
    const newVolume = parseFloat(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);
  };
  const handleToggleFullScreen = () => {
    const video = videoRef.current;

    if (!document.fullscreenElement) {
      video.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }

    setIsFullScreen(!isFullScreen);
  };
    return(
    <div className='home'>
      <Header ></Header>
        
   <section className='mugabo'>
    <div className='container  py-5'>
        <div className='row  align-items-center py-5'>
                <div className='col-lg-12 col-12 col-sm-12 landing-page'>   
               <div className='home-header'>
                
               <div className='heading align-items-center'>


                  <img src={firstimage} className='img-fluid landing-page-image' style={{width: '100%',height:'80vh',objectFit:'contain'}} alt='headerimage'/>
                </div>
                  
               </div>
            </div>
           <div className='col-md-12'>
  <div className='py-2 down-header d-flex justify-content-between align-items-center'>
    <div className='development-header-bottom'>
      DECEMBER 31, 2023<br/>BK - ARENA
    </div>
    <div className='mb-lg-0'>
      <Link to='/Register' style={{textDecoration:'none'}}><button className='btn btn-crossover'>REGISTER NOW</button></Link>
    </div>
  </div>
</div>
            
        </div>

    </div>

</section>
<section>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-6'>
                    <h1 className='development-header23  size-2'>A Photo Gallery of CROSSOVER 2023</h1>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6  col-12'>
                    <img src={galleryimage1} className='img-fluid size-2' style={{objectFit: 'cover', width: '100%'}}  alt='Gallery' />
                    </div>
                    <div className='col-lg-6  col-md-6 col-12'>
                  <img src={galleryimage2} className='img-fluid size' style={{objectFit: 'cover', width: '100%'}} alt='Gallery'  />
                  <img src={galleryimage3} className='img-fluid size' style={{objectFit: 'cover', width: '100%'}} alt='Gallery'  />
                 
            </div>

                    </div>
            </div>
            <div className='col-lg-6 col-12'>
                <div className='row'>
            <div className='col-lg-6 col-12'>
                <div className='col-lg-12'>
                    <div className='size'></div>
                </div>
                  <img src={galleryimage4} className='img-fluid size-2' style={{objectFit: 'cover', width: '100%'}} alt='Gallery'  />
            </div>
             <div className='col-lg-6 col-12'>
                <img src={galleryimage5} className='img-fluid size' style={{objectFit: 'cover', width: '100%'}} alt='Gallery'  />
                <img src={galleryimage6} className='img-fluid size' style={{objectFit: 'cover', width: '100%'}} alt='Gallery'  />
                <img src={galleryimage7} className='img-fluid size' style={{objectFit: 'cover', width: '100%'}} alt='Gallery'  />
    </div>
<div className='col-lg-12 col-12'>
        <img src={galleryimage8} className='img-fluid size' style={{objectFit: 'cover', width: '100%'}} alt='Gallery'  />
        </div>
   </div>
    </div>

            
        </div>

   
        
    </div>
</section>
<section className='py-3'>
    <div className='container'>
        <div className='row'>
        <div className='col-lg-12'>
        <h2 className='section-title'>ThrowBack</h2>   
            <center>
            <div className='containersas show-controls'>
      <div className='wrappersasa'>
        <ul className='video-controls'>
          <li className='options left'>
            <button className='volume'>
              <i className='fa-solid fa-volume-high'></i>
            </button>
            <input
              type='range'
              min='0'
              max='1'
              step='any'
              onChange={handleVolumeChange}
              value={volume}
            />
          </li>
          <li className='options center'>
            <button className='skip-backward' onClick={handleSkipBackward}>
              <i className='fas fa-backward'></i>
            </button>
            <button className='play-pause' onClick={togglePlayPause}>
              <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
            </button>
            <button className='skip-forward' onClick={handleSkipForward}>
              <i className='fas fa-forward'></i>
            </button>

           

            <button className='fullscreen' onClick={handleToggleFullScreen}>
              <i className={`fa-solid ${isFullScreen ? 'fa-compress' : 'fa-expand'}`}></i>
            </button>
          </li>
          <li className='options right'>
            <div className='video-timer'>
              <span className='current-time'>{formatTime(currentTime)}</span>
              <span className='separator'> / </span>
              <span className='video-duration'>{formatTime(duration)}</span>
            </div>
          </li>
        
        </ul>
      </div>
      <div className='video-name'>CrossOver 2023</div>
      <video ref={videoRef} src={videoplayer}></video>
    </div>
 </center>
    </div>
    </div>
    </div>

</section>
<section>
     <div className='container'>
        <div className='row'>
        <div className='col-lg-12'>
        <h2 className='section-title'>Blogs</h2> 
          <div className='row'>
       
            <div className='col-lg-12'>
              <div className='row grid'>
                
                <div className='col-lg-4 templatemo-item-col '>
                  <div className='meeting-item'>
                    <div className='thumb'>
                     
                    <Link to='/Blog'><img src={blogimage3}  className='img-fluid' alt='blogimage' /></Link>
                    </div>
                    <div className='down-content'>
                    
                    <Link to='/Blog'><h4>From Confusion to Clarity</h4></Link>
                       <div className='py-2 d-flex justify-content-between'>
    <div className='development-header-bottom'>
      <img className='ellipse-162-uaH-bg' src={personblog} alt='personimage' />
      <span className='raissa-MBPh'>Raissa</span>
    </div>
     <div className='mb-lg-0'>
    </div>
    <div className='mb-lg-0'>
                        
              <div className='rectangle-1318-V2h'>
            </div>
      <span className='raissa-MBP'>June 28, 2018</span>
    </div>
    <div className='mb-lg-6'>
    </div>
  </div>
                      <p className='descript'>As a Christian, I never expected that my life would change drastically in a way I never imagined. But as I reflect on my journey, I can confidently say that the Lord works in mysterious ways.</p>
                      <Link to='blog' style={{textDecoration: 'none'}} className='blog-link'>
                      <span className='view-post-ksj'>View Post</span>
          <div className='rectangle-1318-sxM'>
          </div>
          </Link>
                    </div>
                  </div>
                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className='landing-page-JXT py-5'>
    <div className='container py-5'>
        <div className='row'>
            <div className='col-lg-12'>
                <h1 className='development-header34'>CROSS OVER 2024</h1>
            </div>
            <div className='col-lg-12'>
                <p className='descript2'>Step into the New Year with inspiration and celebration at Crossover2024! Join us at the BK Arena on December 31st, 2023, for an electrifying experience inspired by Psalm 65:11, promising a night crowned with goodness and abundance. Secure your spot now</p>
                <center><Link to='/Register' style={{textDecoration:'none'}}><button className='btn btn-crossover2' style={{alignItems: 'center'}}>Register now</button></Link></center>
            </div>
            
        </div>
        
    </div>
</section>
<Footer></Footer>
   </div>
    );
    
}
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export default Home;