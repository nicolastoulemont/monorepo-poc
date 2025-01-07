import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component152 } from './Component152';

describe('Component152', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component152 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component152 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
