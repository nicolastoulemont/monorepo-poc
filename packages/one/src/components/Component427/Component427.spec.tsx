import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component427 } from './Component427';

describe('Component427', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component427 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component427 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
