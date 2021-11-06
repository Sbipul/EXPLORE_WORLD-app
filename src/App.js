import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Shared/Header/Header';
import Selected from './Pages/Selected/Selected';
import PrivetRoute from './Pages/PrivetRoute/PrivetRoute'
import AuthProvider from '../src/AuthProvider/AuthProvider'
import Login from './Pages/Login/Login';
import MyOrder from './Pages/MyOrder/MyOrder';
import Admin from './Pages/Admin/Admin';
import NewEvent from './Pages/NewEvent/NewEvent';
import Footer from './Shared/Footer/Footer';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Error from './Pages/Error/Error';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>

        <Route path="/log">
          <Login/>
        </Route>

        <Route path="/contact">
          <Contact/>
        </Route>

        <Route path="/admin">
          <Admin/>
        </Route>

        <Route path="/newEvent">
          <NewEvent/>
        </Route>

        <Route path="/about">
          <About/>
        </Route>

        <Route path="/orders">
          <MyOrder/>
        </Route>

        <PrivetRoute path="/cards/:id">
          <Selected/>
        </PrivetRoute>

        <Route path="*">
          <Error/>
        </Route>
        
      </Switch>
        <Footer/>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
