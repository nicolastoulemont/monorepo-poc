import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component412 } from "./Component412"

describe("Component412", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component412 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component412 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
