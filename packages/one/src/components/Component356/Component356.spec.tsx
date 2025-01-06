import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component356 } from "./Component356"

describe("Component356", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component356 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component356 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
