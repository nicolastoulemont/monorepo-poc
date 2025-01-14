import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component90 } from './Component90';

describe('Component90', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component90 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component90 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
