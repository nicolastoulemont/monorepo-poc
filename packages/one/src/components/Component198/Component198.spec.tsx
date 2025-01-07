import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component198 } from './Component198';

describe('Component198', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component198 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component198 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
