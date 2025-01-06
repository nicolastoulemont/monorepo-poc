import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component486 } from './Component486';

describe('Component486', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component486 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component486 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
