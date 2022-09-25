import { render, screen, waitFor, within } from '@testing-library/react';
import React from 'react';
import user from '@testing-library/user-event';
import NewDishComponent from '../components/NewDishComponent';

describe('Add new ingredient form',() => {
    const onSubmit = jest.fn();

    beforeEach(() => {
        onSubmit.mockClear();
        render(<NewDishComponent onSubmit = {onSubmit} />);
    });

    it('saveDish is called when all fields pass validation', () => {
        user.type(getName(), 'burger');
        user.type(getPrice(), '19.8');
        user.type(getKiloJoule(), '9999');
        user.type(getDescription(), 'good');
        
    });
})

function getName () {
    return screen.getByTestId("name", {
        name: /Name/i
    });
}

function getPrice () {
    return screen.getByTestId("price", {
        name: /Name/i
    });
}

function getKiloJoule () {
    return screen.getByTestId("kiloJoule", {
        name: /Name/i
    });
}

function getDescription () {
    return screen.getByTestId("description", {
        name: /Name/i
    });
}