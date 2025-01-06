import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component273 } from './Component273';

describe('Component273', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component273 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component273 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
