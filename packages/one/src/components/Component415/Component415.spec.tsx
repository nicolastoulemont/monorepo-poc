import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component415 } from './Component415';

describe('Component415', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component415 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component415 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
