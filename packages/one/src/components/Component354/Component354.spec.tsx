import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component354 } from './Component354';

describe('Component354', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component354 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component354 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
