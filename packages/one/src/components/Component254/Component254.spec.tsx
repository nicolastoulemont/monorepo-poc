import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component254 } from './Component254';

describe('Component254', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component254 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component254 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
