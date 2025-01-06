import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component488 } from './Component488';

describe('Component488', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component488 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component488 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
