import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component192 } from './Component192';

describe('Component192', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component192 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component192 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
