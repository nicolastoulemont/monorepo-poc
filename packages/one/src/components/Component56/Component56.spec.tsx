import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component56 } from './Component56';

describe('Component56', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component56 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component56 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
