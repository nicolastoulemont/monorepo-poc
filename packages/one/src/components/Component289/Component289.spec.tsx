import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component289 } from "./Component289"

describe("Component289", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component289 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component289 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
