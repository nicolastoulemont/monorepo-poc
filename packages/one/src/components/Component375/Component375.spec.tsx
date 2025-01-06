import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component375 } from "./Component375"

describe("Component375", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component375 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component375 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
