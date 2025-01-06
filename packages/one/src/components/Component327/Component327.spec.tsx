import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component327 } from "./Component327"

describe("Component327", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component327 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component327 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
