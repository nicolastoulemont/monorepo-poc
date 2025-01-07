import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component185 } from './Component185';

describe('Component185', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component185 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component185 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
