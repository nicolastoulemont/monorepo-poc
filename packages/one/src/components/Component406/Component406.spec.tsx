import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component406 } from './Component406';

describe('Component406', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component406 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component406 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
