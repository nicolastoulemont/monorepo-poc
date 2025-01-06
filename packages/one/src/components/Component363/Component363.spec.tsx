import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component363 } from "./Component363"

describe("Component363", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component363 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component363 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
