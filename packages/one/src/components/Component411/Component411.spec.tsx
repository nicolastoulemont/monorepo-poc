import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component411 } from './Component411';

describe('Component411', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component411 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component411 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
