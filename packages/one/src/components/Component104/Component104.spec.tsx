import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component104 } from './Component104';

describe('Component104', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component104 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component104 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
