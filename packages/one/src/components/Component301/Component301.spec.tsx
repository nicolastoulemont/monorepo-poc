import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component301 } from "./Component301"

describe("Component301", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component301 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component301 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
