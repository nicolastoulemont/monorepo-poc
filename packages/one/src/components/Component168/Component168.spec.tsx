import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component168 } from './Component168';

describe('Component168', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component168 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component168 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
