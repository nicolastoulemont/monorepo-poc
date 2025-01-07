import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component116 } from './Component116';

describe('Component116', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component116 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component116 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
