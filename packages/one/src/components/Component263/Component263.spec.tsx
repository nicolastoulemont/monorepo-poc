import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component263 } from './Component263';

describe('Component263', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component263 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component263 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
