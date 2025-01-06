import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component396 } from './Component396';

describe('Component396', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component396 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component396 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
