import { Button, Form } from 'semantic-ui-react'

// IngredientForm component takes up to 4 ingredients to render a meal

function IngredientForm() {
    return (
        <>
            <Form className="form-box">
                <Form.Field>
                <label>Enter your ingredients</label>
                <input placeholder='Enter up to 4 ingredients...' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>

        </>
    );
}

export default IngredientForm;