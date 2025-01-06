import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component410 } from './Component410';

describe('Component410', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component410 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component410 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
