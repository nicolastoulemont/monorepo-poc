import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component156 } from './Component156';

describe('Component156', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component156 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component156 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
