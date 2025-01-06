import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component105 } from './Component105';

describe('Component105', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component105 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component105 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
