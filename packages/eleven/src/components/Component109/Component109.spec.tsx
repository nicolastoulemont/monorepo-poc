import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component109 } from './Component109';

describe('Component109', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component109 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component109 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
