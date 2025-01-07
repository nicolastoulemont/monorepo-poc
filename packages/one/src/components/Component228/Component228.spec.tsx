import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component228 } from './Component228';

describe('Component228', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component228 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component228 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
