import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component262 } from "./Component262"

describe("Component262", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component262 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component262 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
