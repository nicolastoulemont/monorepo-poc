import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component215 } from "./Component215"

describe("Component215", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component215 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component215 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
