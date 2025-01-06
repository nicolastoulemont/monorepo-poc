import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component89 } from "./Component89"

describe("Component89", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component89 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component89 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
