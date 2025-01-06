import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component413 } from './Component413';

describe('Component413', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component413 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component413 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
