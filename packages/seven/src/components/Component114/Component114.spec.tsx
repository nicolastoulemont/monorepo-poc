import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component114 } from './Component114';

describe('Component114', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component114 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component114 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
