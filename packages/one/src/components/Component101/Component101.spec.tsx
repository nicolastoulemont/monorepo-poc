import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component101 } from "./Component101"

describe("Component101", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component101 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component101 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
