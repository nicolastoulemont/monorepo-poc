import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component92 } from "./Component92"

describe("Component92", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component92 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component92 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
