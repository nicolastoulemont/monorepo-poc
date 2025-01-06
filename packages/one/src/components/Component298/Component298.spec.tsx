import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component298 } from './Component298';

describe('Component298', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component298 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component298 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
