import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component330 } from './Component330';

describe('Component330', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component330 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component330 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
