import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component317 } from './Component317';

describe('Component317', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component317 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component317 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
