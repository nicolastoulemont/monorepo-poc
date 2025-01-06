import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component222 } from "./Component222"

describe("Component222", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component222 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component222 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
