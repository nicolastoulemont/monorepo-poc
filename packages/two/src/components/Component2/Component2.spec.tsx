import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component2 } from './Component2';

describe('Component2', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component2 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component2 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
