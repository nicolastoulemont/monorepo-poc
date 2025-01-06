import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component430 } from './Component430';

describe('Component430', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component430 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component430 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
