"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";

import { useClerk } from "@clerk/nextjs";
import { useToast } from "./use-toast";
import { useChatContext } from "@/context/user-chat-context";

const useSideBar = () => {
	const [expand, setExpand] = useState<boolean>(true);
	const router = useRouter();
	const pathname = usePathname();

	const page = pathname.split("/").pop();
	const { signOut } = useClerk();

	const onSignOut = () => signOut(() => router.push("/"));

	const onExpand = () => setExpand((prev) => !prev);

	return {
		expand,
		onExpand,
		page,
		onSignOut,
	};
};

export default useSideBar;
