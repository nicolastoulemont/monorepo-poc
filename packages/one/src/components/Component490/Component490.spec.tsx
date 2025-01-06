import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component490 } from './Component490';

describe('Component490', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component490 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component490 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
