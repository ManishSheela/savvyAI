import { DomainSettingsSchema } from "@/schemas/settings.schems";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useToast } from "./use-toast";
import { useState } from "react";
import {
	onChatBotImageUpdate,
	onDeleteUserDomain,
	onUpdateDomain,
	onUpdateWelcomeMessage,
} from "@/actions/settings";
import { useUploadImage } from "./use-upload-image";

type DomainSettingProps = {
	domain?: string;
	image?: any;
	welcomeMessage?: string;
};

export const useSettings = (id: string) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<DomainSettingProps>({
		resolver: zodResolver(DomainSettingsSchema),
	});

	const router = useRouter();
	const { toast } = useToast();
	const [loading, setLoading] = useState<boolean>(false);
	const [deleting, setDeleting] = useState<boolean>(false);

	const uploadImage = useUploadImage();

	const onUpdateSettings = handleSubmit(async (values) => {
		const { domain, image, welcomeMessage } = values;

		setLoading(true);

		try {
			if (domain) {
				const updatedDomain = await onUpdateDomain(id, domain);
				toast({ title: "Success", description: updatedDomain.message });
			}

			if (image) {
				const uploadedUrl = await uploadImage(image);
				const botImage = await onChatBotImageUpdate(id, uploadedUrl);

				toast({
					title: botImage.status === 200 ? "Success" : "Error",
					description: botImage.message,
				});
			}

			if (welcomeMessage) {
				const message = await onUpdateWelcomeMessage(welcomeMessage, id);
				toast({ title: "Success", description: message.message });
			}
			reset();
			router.refresh();
		} catch (error: any) {
			toast({ title: "Error", description: error.message });
		} finally {
			setLoading(false);
		}
	});

	const onDeleteDomain = async () => {
		setDeleting(true);
		const deleted = await onDeleteUserDomain(id);

		if (deleted) {
			toast({ title: "Success", description: deleted.message });
			setDeleting(false);
			router.refresh();
		}
	};

	return {
		register,
		errors,
		loading,
		deleting,
		onUpdateSettings,
		onDeleteDomain,
	};
};
