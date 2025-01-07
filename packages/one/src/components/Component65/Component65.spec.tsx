import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component65 } from './Component65';

describe('Component65', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component65 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component65 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
