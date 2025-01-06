import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component208 } from "./Component208"

describe("Component208", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component208 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component208 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
