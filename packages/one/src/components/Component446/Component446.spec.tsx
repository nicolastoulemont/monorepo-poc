import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component446 } from "./Component446"

describe("Component446", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component446 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component446 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
