import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component252 } from './Component252';

describe('Component252', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component252 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component252 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
