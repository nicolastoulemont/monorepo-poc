import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component333 } from './Component333';

describe('Component333', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component333 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component333 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
