import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component426 } from './Component426';

describe('Component426', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component426 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component426 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
