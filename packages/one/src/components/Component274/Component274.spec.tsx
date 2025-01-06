import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component274 } from "./Component274"

describe("Component274", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component274 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component274 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
