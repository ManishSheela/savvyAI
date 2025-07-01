import { onUpdatePassword } from "@/actions/settings";
import {
	ChangePasswordProps,
	ChangePasswordSchema,
} from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "./use-toast";

export const useChangePassword = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ChangePasswordProps>({
		resolver: zodResolver(ChangePasswordSchema),
		mode: "onChange",
	});
	const [loading, setLoading] = useState<boolean>(false);

	const onChangePassword = handleSubmit(async (values) => {
		try {
			setLoading(true);
			const updated = await onUpdatePassword(values.password);

			if (updated) {
				reset();
				setLoading(false);
				toast({ title: "Success", description: updated.message });
			}
		} catch (error) {
			console.log({ error });
		}
	});

	return { loading, register, errors, onChangePassword };
};
