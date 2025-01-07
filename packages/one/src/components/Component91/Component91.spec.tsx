import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component91 } from './Component91';

describe('Component91', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component91 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component91 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
