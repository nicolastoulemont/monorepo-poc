import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component409 } from './Component409';

describe('Component409', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component409 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component409 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
