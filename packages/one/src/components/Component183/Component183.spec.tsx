import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component183 } from './Component183';

describe('Component183', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component183 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component183 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
