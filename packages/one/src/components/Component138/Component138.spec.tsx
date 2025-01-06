import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component138 } from "./Component138"

describe("Component138", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component138 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component138 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
