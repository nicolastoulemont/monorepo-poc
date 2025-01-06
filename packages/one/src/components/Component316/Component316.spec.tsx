import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component316 } from './Component316';

describe('Component316', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component316 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component316 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
