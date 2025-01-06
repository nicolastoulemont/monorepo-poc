import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component366 } from "./Component366"

describe("Component366", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component366 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component366 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
