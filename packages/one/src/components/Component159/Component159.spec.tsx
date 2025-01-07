import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component159 } from './Component159';

describe('Component159', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component159 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component159 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
