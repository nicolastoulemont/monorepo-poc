import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component463 } from './Component463';

describe('Component463', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component463 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component463 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
