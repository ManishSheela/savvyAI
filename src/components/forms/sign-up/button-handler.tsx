"use client";
import { Button } from "@/components/ui/button";
import { useAuthContextHook } from "@/context/use-auth-context";
import { useSignUpForm } from "@/hooks/use-sign-up";
import Link from "next/link";
import React from "react";
import { useFormContext } from "react-hook-form";

type Props = {};

const AccountCreationHealperText = (
	<p>
		Already have an account?{" "}
		<Link href="/auth/sign-in" className="font-bold">
			Sign In
		</Link>
	</p>
);

const ButtonHandler = (props: Props) => {
	const { setCurrentStep, currentStep } = useAuthContextHook();
	const { formState, getFieldState, getValues } = useFormContext();
	const { onGenerateOTP } = useSignUpForm();

	const { isDirty: isName } = getFieldState("fullname", formState);
	const { isDirty: isEmail } = getFieldState("email", formState);
	const { isDirty: isPassword } = getFieldState("password", formState);

	if (currentStep === 3) {
		return (
			<div className="w-full flex flex-col gap-3 items-center">
				<Button type="submit" className="w-full">
					Create an account
				</Button>
				{AccountCreationHealperText}
			</div>
		);
	}

	if (currentStep === 2) {
		return (
			<div className="w-full flex flex-col gap-3 items-center">
				<Button
					type="submit"
					className="w-full"
					{...(isName &&
						isEmail &&
						isPassword && {
							onClick: () =>
								onGenerateOTP(
									getValues("email"),
									getValues("password"),
									setCurrentStep
								),
						})}
				>
					Continue
				</Button>
				{AccountCreationHealperText}
			</div>
		);
	}

	return (
		<div className="w-full flex flex-col gap-3 items-center">
			<Button
				type="submit"
				className="w-full"
				onClick={() => setCurrentStep((prev: number) => prev + 1)}
			>
				Continue
			</Button>
			{AccountCreationHealperText}
		</div>
	);
};

export default ButtonHandler;
