import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component449 } from "./Component449"

describe("Component449", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component449 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component449 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
