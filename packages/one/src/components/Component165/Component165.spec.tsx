import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component165 } from "./Component165"

describe("Component165", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component165 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component165 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
