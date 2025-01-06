import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component389 } from "./Component389"

describe("Component389", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component389 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component389 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
