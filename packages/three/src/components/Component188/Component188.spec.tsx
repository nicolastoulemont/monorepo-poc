import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component188 } from './Component188';

describe('Component188', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component188 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component188 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
