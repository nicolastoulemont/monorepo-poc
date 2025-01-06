import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component350 } from './Component350';

describe('Component350', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component350 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component350 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
