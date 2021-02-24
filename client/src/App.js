
// Import libraries/dependencies here 
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader'
import Meal from './components/Meal';
import IngredientForm from './components/IngredientForm';
import MealList from './components/MealList';
import MealContainer from './containers/MealContainer';
import CocktailContainer from './containers/CocktailContainer';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AboutPage from './components/AboutPage';




function App() {
  return (
    <>
    <Router>
    <>
        <Switch>
        <Route exact path="/" 
                render={() => <MealContainer />}/>
        <Route path="/cocktails" 
                render={() => <CocktailContainer />}/>
        <Route path="/about"
                render={() => <AboutPage />} />         
        </Switch>
    </>
    </Router>
    </>);
}

export default App;
