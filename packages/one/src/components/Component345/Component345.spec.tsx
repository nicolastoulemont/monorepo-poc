import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component345 } from './Component345';

describe('Component345', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component345 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component345 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
