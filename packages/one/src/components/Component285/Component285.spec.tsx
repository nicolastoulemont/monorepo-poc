import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component285 } from "./Component285"

describe("Component285", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component285 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component285 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
