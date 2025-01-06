import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component264 } from './Component264';

describe('Component264', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component264 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component264 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
