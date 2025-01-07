import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component29 } from './Component29';

describe('Component29', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component29 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component29 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});