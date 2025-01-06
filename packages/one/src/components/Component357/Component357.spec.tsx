import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component357 } from './Component357';

describe('Component357', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component357 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component357 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
