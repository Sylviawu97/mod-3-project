import React,{ useState } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';

import About from './components/About';
import ApplicationForm from './components/ApplicationForm';
import Contact from './components/Contact';
import Navbarmenu from './components/menu/Navbarmenu';
import SummerCamp from './components/SummerCamp';
import CareerAdvice from './components/CareerAdvice';



function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>

      <Router basename="/">

        {/* Add Menu Component */}
        <Navbarmenu setOpen={setOpen} />
        
        <Switch> 
          <Route exact path="/" component={About}/>
          <Route path="/ApplicationForm" render={() => <ApplicationForm open={open} setOpen={setOpen} />}/>
          <Route path="/SummerCamp" component={SummerCamp}/>
          <Route path="/CareerAdvice" component={CareerAdvice}/>
          <Route path="/Contact" component={Contact}/>

          
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
