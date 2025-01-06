import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component283 } from './Component283';

describe('Component283', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component283 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component283 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
