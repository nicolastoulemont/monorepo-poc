import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component493 } from './Component493';

describe('Component493', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component493 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component493 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
