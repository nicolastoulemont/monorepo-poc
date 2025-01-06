import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component7 } from "./Component7"

describe("Component7", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component7 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component7 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
