import GoogleIcon from "@/components/atoms/GoogleIcon";
import {
	BotMessageSquare,
	MailIcon,
	MessageCircleQuestion,
	StarIcon,
	TimerIcon,
} from "lucide-react";

type SIDE_BAR_MENU_PROPS = {
	label: string;
	icon: JSX.Element;
	path: string;
};

export const SIDE_BAR_MENU: SIDE_BAR_MENU_PROPS[] = [
	{
		label: "Dashboard",
		icon: <GoogleIcon icon="dashboard" />,
		path: "dashboard",
	},
	{
		label: "Conversations",
		icon: <GoogleIcon icon="sms" />,
		path: "conversation",
	},
	{
		label: "Integrations",
		icon: <GoogleIcon icon="integration_instructions" />,
		path: "integration",
	},
	{
		label: "Settings",
		icon: <GoogleIcon icon="settings" />,
		path: "settings",
	},
	{
		label: "Appointments",
		icon: <GoogleIcon icon="calendar_month" />,
		path: "appointment",
	},
	{
		label: "Email Marketing",
		icon: <GoogleIcon icon="mail" />,
		path: "email-marketing",
	},
];

type TABS_MENU_PROPS = {
	label: string;
	icon?: JSX.Element;
};

export const TABS_MENU: TABS_MENU_PROPS[] = [
	{
		label: "unread",
		icon: <MailIcon />,
	},
	{
		label: "all",
		icon: <MailIcon />,
	},
	{
		label: "expired",
		icon: <TimerIcon />,
	},
	{
		label: "starred",
		icon: <StarIcon />,
	},
];

export const HELP_DESK_TABS_MENU: TABS_MENU_PROPS[] = [
	{
		label: "help desk",
	},
	{
		label: "questions",
	},
];

export const APPOINTMENT_TABLE_HEADER = [
	"Name",
	"RequestedTime",
	"Added Time",
	"Domain",
];

export const EMAIL_MARKETING_HEADER = ["Id", "Email", "Answers", "Domain"];

export const BOT_TABS_MENU: TABS_MENU_PROPS[] = [
	{
		label: "chat",
		icon: <BotMessageSquare />,
	},
	{
		label: "helpdesk",
		icon: <MessageCircleQuestion />,
	},
];
