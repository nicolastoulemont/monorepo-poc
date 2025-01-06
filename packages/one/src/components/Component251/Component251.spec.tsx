import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component251 } from './Component251';

describe('Component251', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component251 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component251 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
