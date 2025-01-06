import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component54 } from "./Component54"

describe("Component54", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component54 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component54 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
