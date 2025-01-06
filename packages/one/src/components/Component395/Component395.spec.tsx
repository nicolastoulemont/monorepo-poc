import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component395 } from './Component395';

describe('Component395', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component395 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component395 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
