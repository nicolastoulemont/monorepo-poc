import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component169 } from './Component169';

describe('Component169', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component169 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component169 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
