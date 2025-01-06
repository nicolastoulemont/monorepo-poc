import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component472 } from './Component472';

describe('Component472', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component472 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component472 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
