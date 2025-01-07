import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component174 } from './Component174';

describe('Component174', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component174 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component174 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
