import Section from "@/components/section-label";
import UploadButton from "@/components/UploadButton";
import { BotIcon, BotMessageSquare } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type EditChatBotIconProps = {
	chatBot: any;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors<FieldValues>;
};

const EditChatBotIcon = ({
	chatBot,
	register,
	errors,
}: EditChatBotIconProps) => {
	return (
		<div className="py-5 flex flex-col gap-5 items-start">
			<Section
				label="Chatbot icon"
				message="Change the icon for the chatbot."
			/>
			<UploadButton label="Edit Image" register={register} errors={errors} />

			{chatBot?.icon ? (
				<div className="rounded-full overflow-hidden">
					<Image src={chatBot.icon} alt="bot" width={80} height={80} />
				</div>
			) : (
				<div className="rounded-full cursor-pointer shadow-md w-16 h-16 flex items-center justify-center bg-blue">
					<BotMessageSquare className="w-8 h-8 " />
				</div>
			)}
		</div>
	);
};

export default EditChatBotIcon;
