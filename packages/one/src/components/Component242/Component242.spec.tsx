import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component242 } from "./Component242"

describe("Component242", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component242 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component242 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
