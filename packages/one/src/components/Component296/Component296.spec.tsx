import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component296 } from "./Component296"

describe("Component296", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component296 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component296 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
