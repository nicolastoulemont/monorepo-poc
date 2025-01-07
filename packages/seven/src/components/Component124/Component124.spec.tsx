import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component124 } from './Component124';

describe('Component124', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component124 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component124 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});