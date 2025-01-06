import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component344 } from "./Component344"

describe("Component344", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component344 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component344 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
