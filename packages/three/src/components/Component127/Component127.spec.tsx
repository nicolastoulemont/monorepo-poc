import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component127 } from './Component127';

describe('Component127', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component127 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component127 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
