import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component341 } from "./Component341"

describe("Component341", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component341 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component341 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
