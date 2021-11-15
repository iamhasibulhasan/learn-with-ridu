import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import AboutUs from './components/AboutUs/AboutUs';
import Courses from './components/Courses/Courses';
import Teachers from './components/Teachers/Teachers ';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route exact path="/teachers">
            <Teachers></Teachers>
          </Route>
          <Route exact path="/contact-us">
            <ContactUs></ContactUs>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
