import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component465 } from './Component465';

describe('Component465', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component465 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component465 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
