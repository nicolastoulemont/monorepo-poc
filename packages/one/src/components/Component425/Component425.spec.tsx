import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component425 } from "./Component425"

describe("Component425", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component425 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component425 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
