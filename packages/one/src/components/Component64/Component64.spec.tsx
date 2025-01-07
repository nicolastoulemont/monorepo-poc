import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component64 } from './Component64';

describe('Component64', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component64 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component64 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
