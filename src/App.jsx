import './App.css';
import Home from './views/Home/Home'
import Navigation from './Components/Navigation/Navigation';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreateBlog from './views/CreateBlog/CreateBlog';
import Login from './views/Login/Login';
import Profile from './views/Profile/Profile';
import Register from './views/Register/Register';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <Router>
      <div className="App">
        <Navigation className="Navigation"/>
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/create-blog' element={<CreateBlog />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
