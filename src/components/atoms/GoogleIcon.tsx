
"use client"
import React from "react";

interface MaterialIconProps {
	icon?: string;
	className?: string;
	onClick?: () => void;
}

const GoogleIcon: React.FC<MaterialIconProps> = ({
	icon = "",
	className = "",
	onClick = () => {},
}) => (
	<span
		className={`material-symbols-outlined text-xl ${className}`}
		onClick={onClick}
	>
		{icon}
	</span>
);
export default GoogleIcon;
