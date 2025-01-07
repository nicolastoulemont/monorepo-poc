import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component128 } from './Component128';

describe('Component128', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component128 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component128 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
