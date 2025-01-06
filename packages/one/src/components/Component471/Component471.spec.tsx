import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component471 } from "./Component471"

describe("Component471", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component471 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component471 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
