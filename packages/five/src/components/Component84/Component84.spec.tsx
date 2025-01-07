import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component84 } from './Component84';

describe('Component84', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component84 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component84 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
