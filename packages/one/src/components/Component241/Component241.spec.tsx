import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component241 } from "./Component241"

describe("Component241", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component241 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component241 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
