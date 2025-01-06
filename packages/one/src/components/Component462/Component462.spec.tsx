import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component462 } from './Component462';

describe('Component462', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component462 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component462 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
