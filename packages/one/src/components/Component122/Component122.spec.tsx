import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component122 } from "./Component122"

describe("Component122", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component122 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component122 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
