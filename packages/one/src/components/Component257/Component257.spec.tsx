import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component257 } from './Component257';

describe('Component257', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component257 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component257 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
