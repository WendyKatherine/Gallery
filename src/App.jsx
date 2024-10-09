//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import { Solar1 } from './components/Solar1';
// import { Solar2 } from './components/Solar2';
// import { Solar3 } from './components/Solar3';
// import { Solar4 } from './components/Solar4';
// import { Solar5 } from './components/Solar5';
// import { Solar6 } from './components/Solar6';
// import { Solar7 } from './components/Solar7';
// import Navigation from './components/Navigation';
import Gsapcomponent from './components/Gsapcomponent';


function App() {

  return (
    <>
      <Gsapcomponent />
      {/* <BrowserRouter>
        <div>
          <h1 className='text-center my-3'>Gallery Project</h1>
        </div>
        <div className='container d-flex justify-content-center'>
          <Routes>
            <Route path='/solar1' element={<Solar1 className='main-img-container'/>} />
            <Route path='/solar2' element={<Solar2 className='main-img-container'/>} />
            <Route path='/solar3' element={<Solar3 className='main-img-container'/>} />
            <Route path='/solar4' element={<Solar4 className='main-img-container'/>} />
            <Route path='/solar5' element={<Solar5 className='main-img-container'/>} />
            <Route path='/solar6' element={<Solar6 className='main-img-container'/>} />
            <Route path='/solar7' element={<Solar7 className='main-img-container'/>} />
          </Routes>
        </div>
        <div>
          <Navigation />
        </div>
      </BrowserRouter> */}
    </>
  );
};

export default App;
