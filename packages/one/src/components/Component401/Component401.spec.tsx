import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component401 } from "./Component401"

describe("Component401", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component401 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component401 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
