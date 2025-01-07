import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component12 } from './Component12';

describe('Component12', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component12 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component12 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
