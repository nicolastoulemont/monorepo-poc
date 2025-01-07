import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component133 } from './Component133';

describe('Component133', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component133 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component133 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
