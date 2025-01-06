import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component377 } from './Component377';

describe('Component377', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component377 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component377 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
