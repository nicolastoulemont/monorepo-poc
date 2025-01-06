import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component307 } from "./Component307"

describe("Component307", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component307 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component307 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
