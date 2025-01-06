import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component442 } from './Component442';

describe('Component442', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component442 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component442 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
