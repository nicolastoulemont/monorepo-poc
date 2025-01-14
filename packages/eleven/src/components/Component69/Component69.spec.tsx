import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component69 } from './Component69';

describe('Component69', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component69 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component69 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
