import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component21 } from './Component21';

describe('Component21', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component21 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component21 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
