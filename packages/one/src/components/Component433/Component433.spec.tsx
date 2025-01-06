import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component433 } from './Component433';

describe('Component433', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component433 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component433 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
