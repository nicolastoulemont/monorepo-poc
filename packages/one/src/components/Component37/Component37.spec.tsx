import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component37 } from "./Component37"

describe("Component37", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component37 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component37 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
