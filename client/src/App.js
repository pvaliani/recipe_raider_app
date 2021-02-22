
// Import libraries/dependencies here 
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader'
import Meal from './components/Meal';
import IngredientForm from './components/IngredientForm';
import MealList from './components/MealList';
import MealContainer from './containers/MealContainer';
import CocktailContainer from './containers/CocktailContainer';




function App() {
  return (
    <>
      <MealContainer />
      <CocktailContainer />
    </>);
}

export default App;
