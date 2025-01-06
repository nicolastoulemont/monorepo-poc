import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component384 } from "./Component384"

describe("Component384", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component384 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component384 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
