import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component227 } from "./Component227"

describe("Component227", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component227 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component227 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
