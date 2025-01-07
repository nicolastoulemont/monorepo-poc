import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component154 } from './Component154';

describe('Component154', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component154 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component154 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});