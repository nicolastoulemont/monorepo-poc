import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component171 } from "./Component171"

describe("Component171", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component171 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component171 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
