import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component172 } from './Component172';

describe('Component172', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component172 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component172 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
