import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component86 } from "./Component86"

describe("Component86", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component86 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component86 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
