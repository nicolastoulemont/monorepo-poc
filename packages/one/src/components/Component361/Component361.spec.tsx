import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component361 } from "./Component361"

describe("Component361", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component361 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component361 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
