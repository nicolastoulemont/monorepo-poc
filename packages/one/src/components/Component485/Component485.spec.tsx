import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component485 } from "./Component485"

describe("Component485", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component485 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component485 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
