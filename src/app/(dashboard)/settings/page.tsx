import BillingSettings from "@/components/setttings/BillingSettings";
import ChangePassword from "@/components/setttings/ChangePassword";
import DarkModeToggle from "@/components/setttings/DarkModeToggle";
import React from "react";

type Props = {};

const SettingsPage = (props: Props) => {
	return (
		<>
			<div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10 px-4">
				<BillingSettings />
				<DarkModeToggle />
				<ChangePassword />
			</div>
		</>
	);
};

export default SettingsPage;
