import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component457 } from "./Component457"

describe("Component457", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component457 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component457 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
