import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component405 } from './Component405';

describe('Component405', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component405 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component405 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
