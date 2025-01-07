import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component107 } from './Component107';

describe('Component107', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component107 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component107 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
