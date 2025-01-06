import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component320 } from './Component320';

describe('Component320', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component320 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component320 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
