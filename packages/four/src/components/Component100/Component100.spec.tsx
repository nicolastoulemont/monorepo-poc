import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component100 } from './Component100';

describe('Component100', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component100 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component100 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
