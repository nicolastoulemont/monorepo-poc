import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component131 } from "./Component131"

describe("Component131", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component131 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component131 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
