import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component423 } from "./Component423"

describe("Component423", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component423 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component423 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
