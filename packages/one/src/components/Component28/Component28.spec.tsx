import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component28 } from "./Component28"

describe("Component28", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component28 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component28 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
