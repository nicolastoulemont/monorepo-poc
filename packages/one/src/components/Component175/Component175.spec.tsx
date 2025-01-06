import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component175 } from "./Component175"

describe("Component175", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component175 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component175 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
