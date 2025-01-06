import { useState } from "react";
import { Button } from "@poc/ui-kit";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="flex flex-col items-center justify-center h-screen w-full">
			<Button onClick={() => setCount((count) => count + 1)}>
				count is {count}
			</Button>
		</div>
	);
}

export default App;
