import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component240 } from "./Component240"

describe("Component240", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component240 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component240 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
