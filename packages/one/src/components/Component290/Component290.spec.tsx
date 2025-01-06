import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component290 } from './Component290';

describe('Component290', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component290 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component290 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
