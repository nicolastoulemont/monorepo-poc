import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component85 } from "./Component85"

describe("Component85", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component85 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component85 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
