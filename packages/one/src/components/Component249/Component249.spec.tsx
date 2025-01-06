import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component249 } from "./Component249"

describe("Component249", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component249 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component249 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
