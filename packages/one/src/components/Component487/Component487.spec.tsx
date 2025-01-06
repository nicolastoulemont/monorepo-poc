import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component487 } from './Component487';

describe('Component487', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component487 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component487 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
