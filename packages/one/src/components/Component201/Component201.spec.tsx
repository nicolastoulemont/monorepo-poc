import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component201 } from "./Component201"

describe("Component201", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component201 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component201 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
