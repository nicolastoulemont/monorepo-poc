import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component260 } from './Component260';

describe('Component260', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component260 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component260 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
