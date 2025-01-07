import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component80 } from './Component80';

describe('Component80', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component80 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component80 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
