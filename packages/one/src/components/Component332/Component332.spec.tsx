import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component332 } from './Component332';

describe('Component332', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component332 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component332 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
