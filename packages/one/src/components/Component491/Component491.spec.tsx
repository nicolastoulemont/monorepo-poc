import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component491 } from './Component491';

describe('Component491', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component491 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component491 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
