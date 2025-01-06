import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component47 } from "./Component47"

describe("Component47", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component47 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component47 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
