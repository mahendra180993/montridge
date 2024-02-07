import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './static/pages/Home';
import Navbar from './static/Navbar';
import Footer from './static/Footer';
import About from './static/pages/About';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
