import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component255 } from './Component255';

describe('Component255', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component255 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component255 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
