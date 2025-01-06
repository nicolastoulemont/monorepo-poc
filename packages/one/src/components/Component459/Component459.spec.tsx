import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component459 } from './Component459';

describe('Component459', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component459 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component459 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
