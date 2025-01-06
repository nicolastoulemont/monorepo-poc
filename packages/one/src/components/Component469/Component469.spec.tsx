import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component469 } from './Component469';

describe('Component469', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component469 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component469 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
