import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component351 } from './Component351';

describe('Component351', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component351 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component351 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
