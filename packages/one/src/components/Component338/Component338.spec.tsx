import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component338 } from './Component338';

describe('Component338', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component338 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component338 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
