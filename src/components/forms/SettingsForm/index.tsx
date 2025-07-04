"use client";
import { Separator } from "@/components/ui/separator";
import { useSettings } from "@/hooks/use-settings-";
import React from "react";
import FormGenerator from "../form-generator";
import CodeSnippet from "@/app/(dashboard)/settings/[domain]/CodeSnippet";
import { Crown } from "lucide-react";
import EditChatBotIcon from "./EditChatBotIcon";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Loader } from "@/components/loader/loader";
import { Button } from "@/components/ui/button";

const WelcomeMessage = dynamic(() => import("./WelcomeMessage"), {
	ssr: false,
});

type SettingsFormProps = {
	id: string;
	name: string;
	plan: "STANDARD" | "PRO" | "ULTIMATE";
	chatBot: {
		id: string;
		icon: string | null;
		welcomeMessage: string | null;
	} | null;
};

const SettingsForm = ({ id, name, plan, chatBot }: SettingsFormProps) => {
	const {
		register,
		errors,
		onUpdateSettings,
		onDeleteDomain,
		deleting,
		loading,
	} = useSettings(id);
	return (
		<form
			className="px-4 flex flex-col gap-8 pb-10"
			onSubmit={onUpdateSettings}
		>
			<div className="flex flex-col gap-3">
				<h2 className="font-bold text-2xl"> Domain Settings</h2>
				<Separator orientation="horizontal" />
				<div className="flex gap-2 pt-5 items-end w-[400px]">
					<FormGenerator
						label="Domain name"
						register={register}
						name="domain"
						errors={errors}
						type="text"
						inputType="input"
						placeholder={name}
					/>
				</div>
				<CodeSnippet id={id} />
			</div>
			<div className="flex flex-col gap-3 mt-5">
				<div className="flex gap-4 items-center">
					<h2 className="font-bold text-2xl">Chatbot Settings</h2>
					<div className="flex gap-1 bg-cream rounded-full px-3 py-1 text-xs items-center font-bold">
						<Crown color="#f0c22d" />
						Premium
					</div>
				</div>
				<Separator orientation="horizontal" />
				<div className="grid md:grid-cols-2">
					<div className="col-span-1 flex flex-col gap-5 order-last md:order-first">
						<EditChatBotIcon
							chatBot={chatBot}
							register={register}
							errors={errors}
						/>

						<WelcomeMessage
							message={chatBot.welcomeMessage}
							register={register}
							errors={errors}
						/>
						<div className="flex gap-5 justify-end">
							<Button
								onClick={onDeleteDomain}
								variant="destructive"
								type="button"
								className="px-10 h-[50px]"
							>
								<Loader loading={deleting}>Delete Domain</Loader>
							</Button>
							<Button type="submit" className="w-[100px] h-[50px]">
								<Loader loading={loading}>Save</Loader>
							</Button>
						</div>
					</div>
					<div className="col-span-1 relative">
						<Image
							src="/images/bot-ui.png"
							className="sticky top-0"
							alt="bot-ui"
							width={530}
							height={769}
						/>
					</div>
				</div>
			</div>
		</form>
	);
};

export default SettingsForm;
