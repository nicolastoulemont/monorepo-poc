import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component34 } from './Component34';

describe('Component34', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component34 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component34 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});