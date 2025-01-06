import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component43 } from "./Component43"

describe("Component43", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component43 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component43 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
