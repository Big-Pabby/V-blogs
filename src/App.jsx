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
  const [logUser, setLogUser] = useState(false)

  const userInfo = (userData) => {
    setUser(userData);
    setLogUser(true)
  }

  const logOut = () => {
    setLogUser(false);
    setUser({});
  }

  if(logUser === true) {
    return (
      <Router>
      <div className="App">
        <Navigation logOut={logOut} className="Navigation"/>
        <Routes>
          <Route path='/home' exact element={<Home/>} />
          <Route path='/create-blog' element={<CreateBlog user={user} />} />
          <Route path='/profile' element={<Profile user={user} />} />
          <Route path='/blog-detail/:id' exact element={<BlogDetail />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    )
  } else {
    return (
      <Router>
      <div className="App">
        <Routes>
          <Route path='/V-blogs' exact element={<Login logUser={userInfo}/>} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </Router>
    )
  }
}

export default App;
