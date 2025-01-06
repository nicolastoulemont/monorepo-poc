import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component223 } from "./Component223"

describe("Component223", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component223 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component223 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
