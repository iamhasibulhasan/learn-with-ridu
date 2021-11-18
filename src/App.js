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
import Banner from './components/Banner/Banner';
import SingleCourse from './components/SingleCourse/SingleCourse';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/about-us">
            <AboutUs></AboutUs>
          </Route>

          <Route exact path="/courses">
            <Courses></Courses>
          </Route>

          <Route path="/courses/:course_code">
            <SingleCourse></SingleCourse>
          </Route>

          <Route path="/teachers">
            <Teachers></Teachers>
          </Route>

          <Route path="/contact-us">
            <ContactUs></ContactUs>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Banner></Banner>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
