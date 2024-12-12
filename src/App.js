 
import Footer from './components/footer';
import Header from './components/header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Main from './Pages/Main';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';


function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    
    <Footer />
    </>
  );
}

export default App;
