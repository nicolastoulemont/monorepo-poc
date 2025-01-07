import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component204 } from './Component204';

describe('Component204', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component204 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component204 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
