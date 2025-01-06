import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component266 } from "./Component266"

describe("Component266", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component266 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component266 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
