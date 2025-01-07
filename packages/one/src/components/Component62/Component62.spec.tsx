import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component62 } from './Component62';

describe('Component62', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component62 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component62 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
