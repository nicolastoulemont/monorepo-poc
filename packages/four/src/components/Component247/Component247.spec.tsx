import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component247 } from './Component247';

describe('Component247', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component247 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component247 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
