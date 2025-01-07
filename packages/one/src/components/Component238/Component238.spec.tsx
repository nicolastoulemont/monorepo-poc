import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component238 } from './Component238';

describe('Component238', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component238 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component238 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
