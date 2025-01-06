import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component475 } from "./Component475"

describe("Component475", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component475 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component475 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
