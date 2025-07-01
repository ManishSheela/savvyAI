import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "./use-toast";
import { onIntegrateDomain } from "@/actions/settings";
import { AddDomainSchema } from "@/schemas/settings.schems";
import { z } from "zod";
import { useUploadThing } from "@/utils/uploadthing";
import { useUploadImage } from "./use-upload-image";

type FormValues = z.infer<typeof AddDomainSchema>;

const useDomain = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormValues>({
		resolver: zodResolver(AddDomainSchema),
	});
	const [loading, setLoading] = useState(false);
	const pathname = usePathname();
	const { toast } = useToast();
	const [isDomain, setIsDomain] = useState<string | undefined>(undefined);
	const router = useRouter();

	const uploadImage = useUploadImage();
	const onAddDomain = handleSubmit(async (values: FormValues) => {
		setLoading(true);
		try {
			const image = values.image[0];
			const uploadedUrl = await uploadImage(image);

			if (!uploadedUrl) {
				throw new Error("Failed to get uploaded image URL");
			}

			const domain = await onIntegrateDomain(values.domain, uploadedUrl);
			if (domain) {
				reset();
				toast({
					title: domain.status === 200 ? "Success" : "Error",
					description: domain.message,
				});
				router.refresh();
			} else {
				throw new Error("Failed to integrate domain");
			}
		} catch (error) {
			toast({
				title: "Error",
				description:
					error instanceof Error
						? error.message
						: "An error occurred while adding the domain",
			});
		} finally {
			setLoading(false);
		}
	});

	useEffect(() => {
		setIsDomain(pathname.split("/").pop());
	}, [pathname]);

	return { register, onAddDomain, loading, errors, isDomain };
};

export default useDomain;
