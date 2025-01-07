import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component193 } from './Component193';

describe('Component193', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component193 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component193 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
