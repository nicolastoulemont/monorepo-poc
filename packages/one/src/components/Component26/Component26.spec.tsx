import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component26 } from "./Component26"

describe("Component26", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component26 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component26 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
