import logonow from '../img/log04x-1.png';

import { useEffect, useState }  from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return(
    <div>
    <nav className={scrolling ? 'navbar navbar-expand-lg fixed-top  bg-white scrolled' : 'navbar navbar-expand-lg fixed-top  bg-white'}>
        <div className='container'>
          <Link to='/'>
               <img src={logonow} className='img-fluid' alt='logo'/>
               </Link>
   
               
     <span style={{cursor: 'pointer'}} className='navbar-toggler' data-toggle='collapse' data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
       <span className='fas fa-bars' style={{color:'white'}}></span>
     </span>
       
       
     <div className='collapse navbar-collapse' id='navbarNavDropdown'>
       <div className='col-md-1'> </div> 
       <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
         <li className='nav-item '>
           <Link className='nav-link' to='/Register'>REGISTER</Link>
         </li>
        <li className='nav-item'>
           <Link className='nav-link' to=''>GALLERY</Link>
         </li>
        
   
       
   
       </ul>
        
               
     </div>
   </div>
   </nav>
   </div>
    );
}

export default Header;