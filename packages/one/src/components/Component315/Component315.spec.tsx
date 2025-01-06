import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component315 } from './Component315';

describe('Component315', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component315 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component315 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
