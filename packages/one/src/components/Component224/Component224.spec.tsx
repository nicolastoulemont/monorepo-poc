import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component224 } from './Component224';

describe('Component224', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component224 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component224 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
