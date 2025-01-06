import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component106 } from "./Component106"

describe("Component106", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component106 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component106 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
