import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: [
		"/",
		"/auth(.*)",
		"/portal(.*)",
		"/images(.*)",
		"/api/uploadthing(.*)",
	],
	ignoredRoutes: ["/chatboat"],
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
