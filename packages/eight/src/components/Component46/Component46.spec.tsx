import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component46 } from './Component46';

describe('Component46', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component46 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component46 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
