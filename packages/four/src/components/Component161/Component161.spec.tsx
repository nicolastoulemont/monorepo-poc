import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component161 } from './Component161';

describe('Component161', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component161 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component161 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
