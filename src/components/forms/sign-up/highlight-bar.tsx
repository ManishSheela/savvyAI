"use client";
import { useAuthContextHook } from "@/context/use-auth-context";
import { cn } from "@/utils/utils";
import React from "react";

type Props = {};

const bars = [1, 2, 3];

const HighLightBar = (props: Props) => {
	const { currentStep, setCurrentStep } = useAuthContextHook();

	return (
		<div className="grid grid-cols-3 gap-3">
			{bars.map((bar) => {
				return (
					<div
						key={bar}
						className={cn(
							"rounded-full h-2 col-span-1 cursor-pointer",
							currentStep == bar ? "bg-blue" : "bg-platinum"
						)}
						onClick={() => {
							// if (currentStep >= bar) {
							setCurrentStep(bar);
							// }
						}}
					/>
				);
			})}
		</div>
	);
};

export default HighLightBar;
