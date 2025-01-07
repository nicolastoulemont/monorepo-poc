import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component41 } from './Component41';

describe('Component41', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component41 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component41 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
