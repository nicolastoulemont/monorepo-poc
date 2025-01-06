import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component30 } from "./Component30"

describe("Component30", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component30 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component30 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
