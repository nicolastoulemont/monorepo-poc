import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component57 } from './Component57';

describe('Component57', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component57 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component57 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
