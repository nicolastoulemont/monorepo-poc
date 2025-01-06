import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component328 } from './Component328';

describe('Component328', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component328 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component328 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
