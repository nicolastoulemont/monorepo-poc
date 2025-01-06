import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component360 } from './Component360';

describe('Component360', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component360 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component360 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
