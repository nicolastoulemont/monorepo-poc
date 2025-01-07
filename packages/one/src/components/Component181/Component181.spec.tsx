import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component181 } from './Component181';

describe('Component181', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component181 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component181 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
