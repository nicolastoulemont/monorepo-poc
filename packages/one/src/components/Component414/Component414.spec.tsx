import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component414 } from "./Component414"

describe("Component414", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component414 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component414 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
