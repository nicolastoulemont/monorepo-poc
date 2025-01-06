import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component473 } from './Component473';

describe('Component473', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component473 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component473 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
