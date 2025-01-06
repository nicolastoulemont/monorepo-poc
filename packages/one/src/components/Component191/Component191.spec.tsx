import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component191 } from "./Component191"

describe("Component191", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component191 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component191 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
