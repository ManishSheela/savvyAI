import { onGetCurrentDomainInfo } from "@/actions/settings";
import SettingsForm from "@/components/forms/SettingsForm";
import { redirect } from "next/navigation";
import React from "react";

type DomainSettingPageProps = {
	params: { domain: string };
};

const DomainSettingPage = async ({ params }: DomainSettingPageProps) => {
	const data = await onGetCurrentDomainInfo(params.domain);

	if (!data || !data.subscription) redirect("/dashboard");

	const { subscription, domains } = data;

	return (
		<div className="overflow-y-auto w-full chat-window flex-1 h-0">
			<SettingsForm
				id={domains[0].id}
				name={domains[0].name}
				plan={subscription.plan!}
				chatBot={domains[0].chatBot}
			/>
		</div>
	);
};

export default DomainSettingPage;
