import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component187 } from "./Component187"

describe("Component187", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component187 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component187 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
