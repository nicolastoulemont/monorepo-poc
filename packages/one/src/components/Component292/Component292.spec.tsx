import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component292 } from './Component292';

describe('Component292', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component292 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component292 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
