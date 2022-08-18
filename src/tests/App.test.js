import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import testData from '../../cypress/mocks/testData';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('Teste', () => {
  it('I am your test', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(testData)
    });
    await act( async () => {
      render(<App />);
    });

    const nameInput = screen.getByTestId('name-filter');
    const applyBtn = screen.getByTestId('button-filter');
    const deleteAllBtn = screen.getByTestId('button-remove-filters');
    const sortBtn = screen.getByTestId('column-sort-button');
    const columnSelect = screen.getByTestId('column-filter');
    const comparisonSelect = screen.getByTestId('comparison-filter');
    const valueInput = screen.getByTestId('value-filter');

    userEvent.selectOptions(columnSelect, 'population');
    userEvent.type(valueInput, '1000');
    userEvent.selectOptions(comparisonSelect, 'maior que');
    userEvent.click(applyBtn);
    const deleteBtn = screen.getByRole('button', {
      name: 'x'
    });
    userEvent.click(deleteBtn);
    userEvent.selectOptions(columnSelect, 'orbital_period');
    userEvent.type(valueInput, '1000');
    userEvent.selectOptions(comparisonSelect, 'menor que');
    userEvent.click(applyBtn);

    userEvent.type(valueInput, '1000');
    userEvent.selectOptions(comparisonSelect, ['igual a']);
    expect(comparisonSelect).toHaveValue('igual a')
    userEvent.click(applyBtn);

    userEvent.click(deleteAllBtn);



    userEvent.click(sortBtn);

    const orderDesc = screen.getByTestId('column-sort-input-desc');
    userEvent.click(orderDesc);

    userEvent.click(sortBtn);

    userEvent.type(nameInput, 'ta');
  });

})
