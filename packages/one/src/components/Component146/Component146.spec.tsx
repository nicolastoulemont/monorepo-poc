import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component146 } from './Component146';

describe('Component146', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component146 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component146 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
