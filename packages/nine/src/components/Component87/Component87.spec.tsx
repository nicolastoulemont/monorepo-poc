import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component87 } from './Component87';

describe('Component87', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component87 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component87 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
