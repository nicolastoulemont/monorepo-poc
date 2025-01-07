import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component212 } from './Component212';

describe('Component212', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component212 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component212 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
