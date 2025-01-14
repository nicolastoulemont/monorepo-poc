import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component17 } from './Component17';

describe('Component17', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component17 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component17 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
