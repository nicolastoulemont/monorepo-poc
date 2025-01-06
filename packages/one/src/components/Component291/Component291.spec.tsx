import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component291 } from "./Component291"

describe("Component291", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component291 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component291 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
