import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component13 } from './Component13';

describe('Component13', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component13 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component13 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
