import { expect, describe, test } from "vitest"
  import { render, fireEvent } from '@testing-library/react';
import { Component259 } from './Component259';

describe('Component259', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Component259 />);
    expect(baseElement).toBeTruthy();
  });

  test('should increment counter when button is clicked', () => {
    const { getByRole } = render(<Component259 />);
    const button = getByRole('button');
    
    fireEvent.click(button);
    
    expect(button.textContent).toBe("Count is: 1");
  });
});
