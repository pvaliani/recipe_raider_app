import { Button, Form } from 'semantic-ui-react'
import {useState} from 'react';


// IngredientForm component takes up to 4 ingredients to render a meal
// IngredientForm component takes in the handleIngredientSubmit as props from the mealContiner

function IngredientForm({handleIngredientSubmit}) {

    // 
    const [submittedData, setSubmittedData] = useState("");

    const handleInput = (event) => {
        setSubmittedData(event.target.value);
        console.log(submittedData);

        return submittedData;
    }

    const submitIngredients = (event) => {
        event.preventDefault();
        handleIngredientSubmit(submittedData);
    }
    return (
        <>
            <Form className="form-box">
                <Form.Field>
                <label>Enter your ingredients</label>
                <input placeholder='Enter up to 4 ingredients...' onChange={handleInput} />
                </Form.Field>
                <Button type='submit' onSubmit={submitIngredients}>Submit</Button>
            </Form>

        </>
    );
}

export default IngredientForm;