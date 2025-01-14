import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component66 } from './Component66';

describe('Component66', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component66 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component66 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
