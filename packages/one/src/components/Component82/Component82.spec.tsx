import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component82 } from './Component82';

describe('Component82', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component82 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component82 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
