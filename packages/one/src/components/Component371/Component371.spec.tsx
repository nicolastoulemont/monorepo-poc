import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component371 } from './Component371';

describe('Component371', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component371 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component371 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
