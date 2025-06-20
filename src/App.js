import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import CreateRecipe from './CreateRecipe/CreateRecipe';
import Details from './Details/Details';
import MySaves from './MySaves/MySaves';
import AboutUs from './AboutUs/AboutUs';
import MyAccount from './MyAccount/MyAccount';
import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';



function AppContent() {
  const location = useLocation();
  const isDetailsPage = location.pathname.startsWith('/details');
  const isMySavesPage = location.pathname.startsWith('/saved');
  const isAboutUsPage = location.pathname.startsWith('/about');
  const isMyAccountPage = location.pathname.startsWith('/myaccount');
  return (
    <>
    { !isDetailsPage &&  !isMySavesPage && !isAboutUsPage && !isMyAccountPage && <Navbar/>}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<CreateRecipe/>}/>
          <Route path="/details/:type/:id" element={<Details/>}/>
          <Route path="/saved" element={<MySaves/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/myaccount" element={<MyAccount/>}/>
        </Routes>
        <Footer/>
    </>
  );
}

function App() {


  return (
    <BrowserRouter>
        <AppContent/>
    </BrowserRouter>
   
  );
}

export default App;
