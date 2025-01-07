import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component44 } from './Component44';

describe('Component44', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component44 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component44 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
