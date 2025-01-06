import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component94 } from "./Component94"

describe("Component94", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component94 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component94 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
