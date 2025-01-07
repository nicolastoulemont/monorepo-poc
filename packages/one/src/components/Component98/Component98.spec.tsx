import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component98 } from './Component98';

describe('Component98', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component98 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component98 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
