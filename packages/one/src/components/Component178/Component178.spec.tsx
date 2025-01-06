import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component178 } from "./Component178"

describe("Component178", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component178 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component178 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
