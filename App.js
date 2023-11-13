import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer  from './Footer';
import Sec1 from './Sec1'
import Sec2 from './Sec2'
import Sec3 from './Sec3'
import Sec4 from './Sec4'
import Freq from './component/Freq';
import Ema from './Ema';
import ErrorBoundry from './ErrorBoundary';
function App() {
  return (
    <>
    
   
   <ErrorBoundry>
   <Navbar />
   <div className='sec1'>
   <Sec1 />
   <Sec2 />
   </div>
   <Sec3 />
   <Sec4 />
   <hr />
   <Freq />
   <Ema />
   <Footer />
   </ErrorBoundry>
   
    
    
    </>
  );
}

export default App;
