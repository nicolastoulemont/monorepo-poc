import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component211 } from './Component211';

describe('Component211', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component211 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component211 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
