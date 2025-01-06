import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component305 } from './Component305';

describe('Component305', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component305 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component305 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
