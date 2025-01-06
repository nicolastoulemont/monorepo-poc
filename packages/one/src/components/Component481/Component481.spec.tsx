import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component481 } from './Component481';

describe('Component481', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component481 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component481 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
