import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component216 } from './Component216';

describe('Component216', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component216 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component216 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
