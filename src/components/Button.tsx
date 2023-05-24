import { ReactNode } from "react";

interface buttonInterface {
	children: ReactNode;
	active: boolean;
}

const Button = ({ children, active }: buttonInterface) => {
	return (
		<button
			className={`${
				active ? "bg-orange" : "bg-light-orange"
			} grid place-items-center rounded-lg text-white w-[250px] shadow-sh-orange active:scale-90 transition-all`}>
			{children}
		</button>
	);
};

export default Button;
