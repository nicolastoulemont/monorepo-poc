import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component123 } from './Component123';

describe('Component123', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component123 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component123 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
