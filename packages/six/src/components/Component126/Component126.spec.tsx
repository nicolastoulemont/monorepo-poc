import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component126 } from './Component126';

describe('Component126', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component126 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component126 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
