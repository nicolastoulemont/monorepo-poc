import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component367 } from './Component367';

describe('Component367', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component367 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component367 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
