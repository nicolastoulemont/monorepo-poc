import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component79 } from "./Component79"

describe("Component79", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component79 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component79 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
