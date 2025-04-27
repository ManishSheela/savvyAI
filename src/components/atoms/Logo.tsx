import { BotMessageSquare } from "lucide-react";
import React from "react";

const Logo = () => {
	return (
		<div>
			<BotMessageSquare className="text-blue w-8 h-8 hover:rotate-45 transition duration-150 ease-in-out cursor-pointer" />
		</div>
	);
};

export default Logo;
