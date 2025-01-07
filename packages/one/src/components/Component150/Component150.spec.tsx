import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component150 } from './Component150';

describe('Component150', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component150 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component150 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
