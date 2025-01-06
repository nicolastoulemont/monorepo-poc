import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component368 } from './Component368';

describe('Component368', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component368 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component368 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
