import { SIDE_BAR_MENU } from "@/constants/menu";
import React from "react";
import MenuItem from "./menu-item";
import DomainMenu from "./domain-menu";
import GoogleIcon from "../atoms/GoogleIcon";

type Props = {
	expand: boolean;
	current: string;
	onSignOut(): void;
	domains:
		| {
				id: string;
				name: string;
				icon: string | null;
		  }[]
		| null
		| undefined;
};

const RenderMenu = ({ expand, current, domains, onSignOut }: Props) => {
	return (
		<div className="animate-fade-in opacity-0 delay-300 fill-mode-forwards flex flex-col justify-between h-full pt-10">
			<div className="flex flex-col">
				<p className="text-xs text-gray-500 mb-3">MENU</p>
				{SIDE_BAR_MENU.map((menu, key) => (
					<MenuItem {...menu} key={key} current={current} expand={expand} />
				))}
				<DomainMenu domains={domains} expand={expand} />
			</div>
			<div className="flex flex-col">
				<p className="text-xs text-gray-500 mb-3">OPTIONS</p>
				<MenuItem
					label="Sign out"
					expand={expand}
					icon={<GoogleIcon icon="logout" />}
					onClick={onSignOut}
				/>
				<MenuItem
					label="Mobile App"
					expand={expand}
					icon={<GoogleIcon icon="devices" />}
				/>
			</div>
		</div>
	);
};

export default RenderMenu;
