import { onLoginUser } from "@/actions/auth";
import InfoBar from "@/components/infobar";
import SideBar from "@/components/sidebar";
import { ChatProvider } from "@/context/user-chat-context";
import React from "react";

type Props = {
	children: React.ReactNode;
};

const DashboardLayout = async ({ children }: Props) => {
	const authenticated = await onLoginUser();
	if (!authenticated) return null;

	return (
		<ChatProvider>
			<div className="flex h-screen w-full">
				<SideBar domains={authenticated.domain} />
				<div className="w-full h-screen flex flex-col gap-4">
					<InfoBar />
					{children}
				</div>
			</div>
		</ChatProvider>
	);
};

export default DashboardLayout;
