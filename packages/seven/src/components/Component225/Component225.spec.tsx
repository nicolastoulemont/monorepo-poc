import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component225 } from './Component225';

describe('Component225', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component225 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component225 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});