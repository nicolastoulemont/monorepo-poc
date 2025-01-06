import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component304 } from './Component304';

describe('Component304', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component304 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component304 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
