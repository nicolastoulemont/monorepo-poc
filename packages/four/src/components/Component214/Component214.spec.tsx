import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component214 } from './Component214';

describe('Component214', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component214 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component214 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
