import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component120 } from './Component120';

describe('Component120', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component120 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component120 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
