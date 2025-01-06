import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component237 } from "./Component237"

describe("Component237", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component237 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component237 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
