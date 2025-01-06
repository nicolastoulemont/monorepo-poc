import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component347 } from './Component347';

describe('Component347', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component347 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component347 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
