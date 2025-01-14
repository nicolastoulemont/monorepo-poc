import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component234 } from './Component234';

describe('Component234', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component234 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component234 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
