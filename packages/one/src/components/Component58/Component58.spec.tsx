import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component58 } from './Component58';

describe('Component58', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component58 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component58 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
