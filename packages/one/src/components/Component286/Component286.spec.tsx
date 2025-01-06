import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component286 } from './Component286';

describe('Component286', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component286 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component286 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
