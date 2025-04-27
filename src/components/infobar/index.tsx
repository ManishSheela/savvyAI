import React from "react";
// import BreadCrumb from './bread-crumb'
import { Card } from "../ui/card";
import { Headphones, Star, Trash } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import GoogleIcon from "../atoms/GoogleIcon";
import BreadCrumb from "./breadcrumb";
import { UserButton } from "@clerk/nextjs";

type Props = {};

const InfoBar = (props: Props) => {
	return (
		<div className="flex w-full justify-between items-center py-2 px-4 shadow-sm">
			<BreadCrumb />
			<div className="flex gap-3 items-center">
				<div>
					<Card className="rounded-md flex gap-3 py-2 px-4 text-ghost">
						<GoogleIcon icon="delete" />
						<GoogleIcon icon="star" />
					</Card>
				</div>
				<Avatar>
					<AvatarFallback className="bg-blue text-white">
						<Headphones />
					</AvatarFallback>
				</Avatar>

				<UserButton />
			</div>
		</div>
	);
};

export default InfoBar;
