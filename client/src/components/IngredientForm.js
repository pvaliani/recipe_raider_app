import { Button, Form } from 'semantic-ui-react'
import {useState} from 'react';


// IngredientForm component takes up to 4 ingredients to render a meal
// IngredientForm component takes in the handleIngredientSubmit as props from the mealContiner

function IngredientForm({handleIngredientSubmit, ingredients, setIngredients, formatInput}) {

    const handleInput = (event) => {
        const formattedInput = formatInput(event.target.value);
        console.log(formattedInput);
        setIngredients(formattedInput);
        console.log(ingredients);
    }

    const submitIngredients = (event) => {
        event.preventDefault();
        handleIngredientSubmit(ingredients);
    }
    return (
        <> 
            <Form className="form-box" onSubmit={submitIngredients}>
                <Form.Field>
                <label>Enter your ingredients</label>
                <input placeholder='Enter up to 4 ingredients...' type="text" onChange={handleInput} />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>

        </>
    );
}

export default IngredientForm;