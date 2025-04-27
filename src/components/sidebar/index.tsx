"use client";
import { cn } from "@/utils/utils";
import React from "react";
import RenderMenu from "./render-menu";
import useSideBar from "@/hooks/use-sidebar";
import GoogleIcon from "../atoms/GoogleIcon";
import Logo from "../atoms/Logo";

type Props = {
	domains:
		| {
				id: string;
				name: string;
				icon: string;
		  }[]
		| null
		| undefined;
};

const SideBar = ({ domains }: Props) => {
	const { expand, onExpand, page, onSignOut } = useSideBar();

	return (
		<div
			className={cn(
				"bg-cream dark:bg-neutral-950 h-full w-[60px] fill-mode-forwards fixed md:relative p-2",
				expand ? "animate-open-sidebar" : "animate-close-sidebar"
			)}
		>
			<div className="flex flex-col h-full">
				<div
					className={cn(
						"flex justify-between items-center gap-1 transition duration-200 ease-in-out",
						expand ? "flex-row" : "flex-col"
					)}
				>
					<Logo />
					<GoogleIcon
						icon="menu"
						className="cursor-pointer animate-fade-in opacity-0 delay-300 fill-mode-forwards"
						onClick={onExpand}
					/>
				</div>
				<RenderMenu
					domains={domains}
					current={page!}
					expand={expand}
					onSignOut={onSignOut}
				/>
			</div>
		</div>
	);
};

export default SideBar;
