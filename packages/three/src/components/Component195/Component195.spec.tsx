import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component195 } from './Component195';

describe('Component195', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component195 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component195 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
