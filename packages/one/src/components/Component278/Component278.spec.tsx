import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component278 } from './Component278';

describe('Component278', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component278 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component278 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
