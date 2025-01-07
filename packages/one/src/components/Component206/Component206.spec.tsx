import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component206 } from './Component206';

describe('Component206', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component206 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component206 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
