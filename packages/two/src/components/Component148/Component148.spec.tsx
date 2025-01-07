import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component148 } from './Component148';

describe('Component148', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component148 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component148 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
