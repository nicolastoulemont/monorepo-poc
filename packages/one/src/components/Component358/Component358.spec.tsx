import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component358 } from "./Component358"

describe("Component358", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component358 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component358 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
