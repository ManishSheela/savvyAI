import { currentUser } from "@clerk/nextjs";
import { UploadThingError } from "uploadthing/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
	imageUploader: f({
		image: { maxFileSize: "4MB", maxFileCount: 1 },
	})
		.middleware(async ({ req }) => {
			const user = await currentUser();

			if (!user) throw new UploadThingError("Unauthorized");

			return { userId: user.id };
		})
		.onUploadComplete(async ({ metadata, file }) => {
			console.log("Upload complete for file:", file, metadata);
			return { url: file.ufsUrl };
		}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
