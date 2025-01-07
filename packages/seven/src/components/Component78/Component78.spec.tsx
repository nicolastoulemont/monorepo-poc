import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component78 } from './Component78';

describe('Component78', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component78 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component78 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
