import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component130 } from './Component130';

describe('Component130', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component130 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component130 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
