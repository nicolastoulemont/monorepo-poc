import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component233 } from './Component233';

describe('Component233', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component233 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component233 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});