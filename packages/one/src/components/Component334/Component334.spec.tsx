import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component334 } from "./Component334"

describe("Component334", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component334 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component334 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
