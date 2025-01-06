import type { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button">;
export const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<button
			className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-blue-600 active:bg-blue-700 transition-colors"
			{...props}
		>
			{children}
		</button>
	);
};
