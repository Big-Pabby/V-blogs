import './App.css';
import React, {useState} from 'react';
import Home from './views/Home/Home'
import Navigation from './Components/Navigation/Navigation';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CreateBlog from './views/CreateBlog/CreateBlog';
import Login from './views/Login/Login';
import Profile from './views/Profile/Profile';
import Register from './views/Register/Register';
import Footer from './Components/Footer/Footer';
import BlogDetail from './views/BlogDetail/BlogDetail';

function App() {
  const[user, setUser] = useState({});

  const logUser = (userData) => {
    setUser(userData);
  }

  return (
    <Router>
      <div className="App">
        <Navigation className="Navigation"/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/create-blog' element={<CreateBlog user={user} />} />
          <Route path='/login' element={<Login logUser={logUser}/>} />
          <Route path='/profile' element={<Profile user={user} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/blog-detail/:id' exact element={<BlogDetail />} />
        </Routes>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
