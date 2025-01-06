import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component418 } from './Component418';

describe('Component418', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component418 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component418 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
