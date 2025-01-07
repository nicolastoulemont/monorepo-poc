import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component132 } from './Component132';

describe('Component132', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component132 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component132 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
