import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import About from './components/Props Concept/About/index.jsx';
import Contact from './components/Props Concept/Contact';
import Goals from './components/Props Concept/Goals';
import Pagenotfound from './components/Route Concept/Pagenotfound';
import usestateConcept from './components/usestateConcept';
import FormConcept from './components/FormConcept';


function App() {
  return (
    <>
      <Switch>
        <Route path="/About" exact component={About} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/Goals" exact component={Goals} />
        <Route path="/usestate" exact component={ usestateConcept}/>
        <Route path="/FormConcept" exact component={FormConcept}/>
        <Route component={Pagenotfound} />

      </Switch>
    </>
  );
}

export default App;
