import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component353 } from "./Component353"

describe("Component353", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component353 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component353 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
