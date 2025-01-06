import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component480 } from './Component480';

describe('Component480', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component480 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component480 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
