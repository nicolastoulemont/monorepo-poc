import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component331 } from "./Component331"

describe("Component331", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component331 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component331 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
