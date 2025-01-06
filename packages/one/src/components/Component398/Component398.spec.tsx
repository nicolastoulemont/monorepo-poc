import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component398 } from "./Component398"

describe("Component398", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component398 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component398 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
