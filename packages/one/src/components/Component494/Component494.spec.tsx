import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component494 } from "./Component494"

describe("Component494", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component494 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component494 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
