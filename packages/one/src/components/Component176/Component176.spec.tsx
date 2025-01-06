import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component176 } from "./Component176"

describe("Component176", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component176 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component176 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
