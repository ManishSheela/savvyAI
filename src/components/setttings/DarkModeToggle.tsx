"use client";

import React from "react";
import Section from "../section-label";
import { cn } from "@/utils/utils";
import { useTheme } from "next-themes";

const DarkModeToggle = () => {
	const { setTheme, theme } = useTheme();

	return (
		<div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
			<div className="lg:col-span-1">
				<Section
					label="Interface Theme"
					message="Select or customize your UI theme"
				/>
			</div>
			<div className="lg:col-span-4 lg:flex-row flex flex-col items-start gap-5">
				<div
					className={cn(
						"rounded-2xl ring-offset-destructive-foreground cursor-pointer border-4 border-transparent",
						theme == "system" && "border-blue"
					)}
					onClick={() => setTheme("system")}
				>
					System Mode
				</div>
				<div
					className={cn(
						"rounded-2xl ring-offset-destructive-foreground cursor-pointer border-4 border-transparent",
						theme == "light" && "border-blue"
					)}
					onClick={() => setTheme("light")}
				>
					Light Mode
				</div>
				<div
					className={cn(
						"rounded-2xl ring-offset-destructive-foreground cursor-pointer border-4 border-transparent",
						theme == "dark" && "border-blue"
					)}
					onClick={() => setTheme("dark")}
				>
					Dark Mode
				</div>
			</div>
		</div>
	);
};

export default DarkModeToggle;
