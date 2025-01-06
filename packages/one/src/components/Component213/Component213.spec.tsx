import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component213 } from "./Component213"

describe("Component213", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component213 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component213 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
