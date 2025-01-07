import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component76 } from './Component76';

describe('Component76', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component76 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component76 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
