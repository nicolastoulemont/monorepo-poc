import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component88 } from './Component88';

describe('Component88', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component88 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component88 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
