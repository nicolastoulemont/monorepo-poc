import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component40 } from './Component40';

describe('Component40', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component40 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component40 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
