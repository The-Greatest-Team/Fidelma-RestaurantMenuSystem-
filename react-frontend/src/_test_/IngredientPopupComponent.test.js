import { render, screen, waitForElement,waitFor, within } from '@testing-library/react';
import React from 'react';
import IngredientPopupComponent from '../components/IngredientPopupComponent';
import user from '@testing-library/user-event';
import IngredientComponent from '../components/IngredientComponent';

describe('Add new ingredient form',() => {
    const saveIngredient = jest.fn(e => e.preventDefault());

    beforeEach(() => {
        saveIngredient.mockClear();
        render(<IngredientPopupComponent saveIngredient = {saveIngredient} />);
    });

    it('saveIngredient is called when all fields pass validation',async () => {
        user.type(getName(), 'chicken');
        user.type(getQuantity(), '18');
        user.type(getPrice(), '29');
        user.click(screen.getByTestId("submit",{name: /Submit/i}));
        expect(saveIngredient).toHaveBeenCalledTimes(1);
        // const ingredients = render(<IngredientComponent />);
        // const name = ingredients.getByText('Adding new ingredient');
        // expect(name).toBeTruthy();
    });

    describe('name field',() => {
        it('render the name input field', () => {
            expect(getName()).toBeInTheDocument();
            expect(getName()).toHaveAttribute("type","text");
            
        })

        it ('will give an error message when name is numeric',() => {
            user.type(getName(),'213123');
            expect(screen.getByTestId("name")).toHaveValue('213123');
            expect(screen.queryByTestId("error-msg-name")).toBeInTheDocument();
            expect(screen.queryByTestId("error-msg-name").textContent).toEqual("Please enter a valid name.");
        })

        it ('will give an error message when name contains special chars',() => {
            user.type(getName(),'garlic@');
            expect(screen.getByTestId("name")).toHaveValue('garlic@');
            expect(screen.queryByTestId("error-msg-name")).toBeInTheDocument();
            expect(screen.queryByTestId("error-msg-name").textContent).toEqual("Please enter a valid name.");
        })
    })
})



function getName () {
    return screen.getByTestId("name", {
        name: /Name/i
    });
}

function getQuantity () {
    return screen.getByTestId("quantity", {
        name: /Quantity/i
    });
}

function getPrice () {
    return screen.getByTestId("price", {
        name: /Price/i
    });
}