import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component221 } from './Component221';

describe('Component221', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component221 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component221 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
