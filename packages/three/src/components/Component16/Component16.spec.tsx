import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component16 } from './Component16';

describe('Component16', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component16 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component16 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
