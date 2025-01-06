import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component444 } from './Component444';

describe('Component444', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component444 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component444 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
