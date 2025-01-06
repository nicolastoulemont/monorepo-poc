import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component455 } from "./Component455"

describe("Component455", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component455 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component455 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
