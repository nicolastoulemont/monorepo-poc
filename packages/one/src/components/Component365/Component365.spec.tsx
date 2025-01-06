import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component365 } from "./Component365"

describe("Component365", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component365 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component365 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
