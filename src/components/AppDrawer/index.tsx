import React from "react";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerTitle,
	DrawerTrigger,
} from "../ui/drawer";

type Props = {
	onOpen: JSX.Element;
	children: React.ReactNode;
	title: string;
	description: string;
};

const AppDrawer = ({ onOpen, children, title, description }: Props) => {
	return (
		<Drawer>
			<DrawerTrigger asChild>{onOpen}</DrawerTrigger>
			<DrawerContent>
				<div className="container flex flex-col items-center gap-2 pb-10">
					<DrawerTitle>{title}</DrawerTitle>
					<DrawerDescription>{description}</DrawerDescription>
					{children}
				</div>
			</DrawerContent>
		</Drawer>
	);
};

export default AppDrawer;
