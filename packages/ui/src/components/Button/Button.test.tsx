import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Button } from "./Button";
import "../../index.css";

test("Renders children", async () => {
	const { getByText } = render(<Button>Hello Vitest!</Button>);
	await expect.element(getByText("Hello Vitest!")).toBeInTheDocument();
});
