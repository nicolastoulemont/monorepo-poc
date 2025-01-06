import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component31 } from "./Component31"

describe("Component31", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component31 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component31 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
