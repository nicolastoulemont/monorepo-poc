import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component32 } from './Component32';

describe('Component32', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component32 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component32 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
