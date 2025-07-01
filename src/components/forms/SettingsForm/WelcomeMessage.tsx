import Section from "@/components/section-label";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import FormGenerator from "../form-generator";
type WelcomeMessageProps = {
	message: string;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors<FieldValues>;
};
export const WelcomeMessage = ({
	message,
	register,
	errors,
}: WelcomeMessageProps) => {
	return (
		<div className="py-5 flex flex-col gap-5 items-start">
			<Section
				label="Greeting message"
				message="Customize your welcome message"
			/>
			<div className="lg:w-[500px]">
				<FormGenerator
					lines={2}
					register={register}
					name="welcomeMessage"
					errors={errors}
					type="text"
					inputType="textarea"
					placeholder={message}
				/>
			</div>
		</div>
	);
};

export default WelcomeMessage;
