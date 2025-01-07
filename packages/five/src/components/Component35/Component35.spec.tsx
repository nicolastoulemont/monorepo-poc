import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component35 } from './Component35';

describe('Component35', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component35 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component35 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
