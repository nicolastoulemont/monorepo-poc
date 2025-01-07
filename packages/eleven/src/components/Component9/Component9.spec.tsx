import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component9 } from './Component9';

describe('Component9', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component9 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component9 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
