import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component129 } from './Component129';

describe('Component129', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component129 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component129 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
