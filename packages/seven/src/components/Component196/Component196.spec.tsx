import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component196 } from './Component196';

describe('Component196', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component196 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component196 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
