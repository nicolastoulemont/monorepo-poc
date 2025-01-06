import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component467 } from "./Component467"

describe("Component467", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component467 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component467 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
