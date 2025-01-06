import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component500 } from './Component500';

describe('Component500', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component500 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component500 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
