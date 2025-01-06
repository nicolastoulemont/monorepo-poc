import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component235 } from "./Component235"

describe("Component235", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component235 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component235 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
