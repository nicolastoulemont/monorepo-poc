import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component182 } from "./Component182"

describe("Component182", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component182 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component182 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
