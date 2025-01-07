import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component136 } from './Component136';

describe('Component136', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component136 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component136 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
