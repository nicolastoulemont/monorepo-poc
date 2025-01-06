import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component55 } from "./Component55"

describe("Component55", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component55 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component55 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
