import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component464 } from './Component464';

describe('Component464', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component464 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component464 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
