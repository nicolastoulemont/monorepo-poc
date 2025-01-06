import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component397 } from "./Component397"

describe("Component397", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component397 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component397 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
