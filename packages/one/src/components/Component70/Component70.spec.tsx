import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component70 } from './Component70';

describe('Component70', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component70 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component70 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
