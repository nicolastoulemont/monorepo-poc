import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component404 } from './Component404';

describe('Component404', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component404 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component404 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
