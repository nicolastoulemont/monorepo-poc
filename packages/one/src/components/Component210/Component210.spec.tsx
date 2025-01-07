import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component210 } from './Component210';

describe('Component210', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component210 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component210 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
