import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component217 } from './Component217';

describe('Component217', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component217 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component217 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
