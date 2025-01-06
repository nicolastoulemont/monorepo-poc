import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component383 } from "./Component383"

describe("Component383", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component383 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component383 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
