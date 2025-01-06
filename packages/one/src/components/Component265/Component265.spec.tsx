import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component265 } from './Component265';

describe('Component265', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component265 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component265 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
