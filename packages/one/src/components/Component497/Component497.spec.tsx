import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component497 } from './Component497';

describe('Component497', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component497 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component497 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
