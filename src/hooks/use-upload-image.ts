import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "./use-toast";

export const useUploadImage = () => {
	const { startUpload } = useUploadThing("imageUploader", {
		onClientUploadComplete: (res) => {
			console.log("Files: ", res);
		},
		onUploadError: (error: Error) => {
			toast({
				title: "Error occurred while uploading the image",
				description: error.message,
			});
		},
		onUploadBegin: (name) => {
			console.log("Uploading: ", name);
		},
	});

	const uploadImage = async (image: File) => {
		const res = await startUpload([image]);
		return res?.[0]?.ufsUrl;
	};

	return uploadImage;
};
