import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component51 } from './Component51';

describe('Component51', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component51 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component51 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
