import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component110 } from './Component110';

describe('Component110', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component110 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component110 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
