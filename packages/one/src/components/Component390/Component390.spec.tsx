import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component390 } from "./Component390"

describe("Component390", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component390 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component390 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
