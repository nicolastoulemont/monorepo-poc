import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component11 } from "./Component11"

describe("Component11", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component11 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component11 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
