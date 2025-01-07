import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component162 } from './Component162';

describe('Component162', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component162 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component162 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
