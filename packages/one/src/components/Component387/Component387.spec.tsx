import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component387 } from './Component387';

describe('Component387', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component387 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component387 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
