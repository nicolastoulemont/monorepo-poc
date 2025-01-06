import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component277 } from './Component277';

describe('Component277', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component277 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component277 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
