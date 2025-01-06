import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component466 } from './Component466';

describe('Component466', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component466 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component466 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
