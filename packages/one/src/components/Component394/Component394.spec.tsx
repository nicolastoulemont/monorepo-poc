import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component394 } from './Component394';

describe('Component394', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component394 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component394 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
