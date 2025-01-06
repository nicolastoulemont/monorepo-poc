import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component279 } from "./Component279"

describe("Component279", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component279 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component279 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
