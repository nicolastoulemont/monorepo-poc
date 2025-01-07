import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component6 } from './Component6';

describe('Component6', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component6 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component6 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
