import { cn } from "@/utils/utils";
import Link from "next/link";
import React from "react";

type Props = {
	expand: boolean;
	label: string;
	icon: JSX.Element;
	path?: string;
	current?: string;
	onClick?(): void;
};

const MenuItem = ({ expand, path, icon, label, current, onClick }: Props) => {
	return (
		<Link
			onClick={onClick}
			className={cn(
				"flex items-center gap-2 p-2 rounded-sm my-1 w-full hover:bg-gray-300",
				!current
					? "text-gray-500"
					: current == path
					? "bg-lightBlue text-black"
					: "text-gray-500"
			)}
			href={path ? `/${path}` : "#"}
		>
			{icon}
			<p className={cn(expand ? "inline" : "hidden", "text-sm")}>{label}</p>
		</Link>
	);
};

export default MenuItem;
