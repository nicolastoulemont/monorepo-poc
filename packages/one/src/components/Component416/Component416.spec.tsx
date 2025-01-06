import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component416 } from './Component416';

describe('Component416', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component416 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component416 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
