import  { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';

import Home from './kalisa/home';
import Register from './kalisa/register';
import Blog from './kalisa/blog';
import NotFound from './kalisa/notfound';

function App() {
  
  return (
   
   <BrowserRouter>
  
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='Register' element={<Register />}></Route>
    <Route path='register' element={<Register />}></Route>
    <Route path='/Blog' element={<Blog />}></Route>
    <Route path='/blog' element={<Blog />}></Route>
    <Route path='*' element={<Navigate to='/404' />} />
    <Route path='/404' element={<NotFound />} />
   </Routes>
   </BrowserRouter>
  
  );
}

export default App;
