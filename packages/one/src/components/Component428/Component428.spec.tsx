import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component428 } from "./Component428"

describe("Component428", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component428 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component428 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
