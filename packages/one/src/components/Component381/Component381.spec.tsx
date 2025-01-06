import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component381 } from './Component381';

describe('Component381', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component381 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component381 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
