import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component321 } from './Component321';

describe('Component321', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component321 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component321 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
