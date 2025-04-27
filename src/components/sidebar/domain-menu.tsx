import { cn } from "@/utils/utils";
import React from "react";
import { Plus } from "lucide-react";
import FormGenerator from "../forms/form-generator";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import useSideBar from "@/hooks/use-sidebar";
import { Loader } from "../loader/loader";
import AppDrawer from "../AppDrawer";
import UploadButton from "../UploadButton";
import useDomain from "@/hooks/use-domain";

type Props = {
	expand: boolean;
	domains:
		| {
				id: string;
				name: string;
				icon: string | null;
		  }[]
		| null
		| undefined;
};

const DomainMenu = ({ domains, expand }: Props) => {
	const { register, onAddDomain, loading, errors, isDomain } = useDomain();
	console.log({ domains });
	return (
		<div className={cn("flex flex-col gap-3", expand ? "mt-3" : "mt-6")}>
			<div
				className={cn(
					"flex flex-row w-full items-center",
					expand ? "justify-between" : "justify-center"
				)}
			>
				{expand && <p className="text-xs text-gray-500">DOMAINS</p>}
				<AppDrawer
					description="add in your domain address to integrate your chatbot"
					title="Add your business domain"
					onOpen={
						<div className="cursor-pointer text-gray-500 rounded-full border-2">
							<Plus />
						</div>
					}
				>
					<Loader loading={loading}>
						<form
							className="mt-3 w-6/12 flex flex-col gap-3"
							onSubmit={onAddDomain}
						>
							<FormGenerator
								inputType="input"
								register={register}
								label="Domain"
								name="domain"
								errors={errors}
								placeholder="mydomain.com"
								type="text"
							/>
							<UploadButton
								register={register}
								label="Upload Icon"
								errors={errors}
							/>
							<Button type="submit" className="w-full">
								Add Domain
							</Button>
						</form>
					</Loader>
				</AppDrawer>
			</div>
			<div className="flex flex-col gap-1 text-ironside font-medium">
				{domains?.map((domain) => (
					<Link
						href={`/settings/${domain.name.split(".")[0]}`}
						key={domain.id}
						className={cn(
							"flex gap-3 hover:bg-white rounded-full transition duration-100 ease-in-out cursor-pointer ",
							expand ? "p-2" : "py-2",
							domain?.name?.split(".")[0] == isDomain && "bg-white"
						)}
					>
						<Image
							src={domain.icon!}
							alt="logo"
							width={20}
							height={20}
							className="rounded-full"
						/>
						{expand && <p className="text-sm">{domain.name}</p>}
					</Link>
				))}
			</div>
		</div>
	);
};

export default DomainMenu;
