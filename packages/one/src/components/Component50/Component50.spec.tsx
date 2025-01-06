import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component50 } from "./Component50"

describe("Component50", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component50 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component50 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
