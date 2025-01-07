import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component125 } from './Component125';

describe('Component125', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component125 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component125 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
