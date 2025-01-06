import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component323 } from './Component323';

describe('Component323', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component323 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component323 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
