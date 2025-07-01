"use client";

import { createContext, useContext, useState } from "react";

type InitialValuesProps = {
	currentStep: number;
	setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const InitialValues: InitialValuesProps = {
	currentStep: 1,
	setCurrentStep: () => {},
};

const AuthContext = createContext<InitialValuesProps>(InitialValues);

export const AuthContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [currentStep, setCurrentStep] = useState<number>(
		InitialValues.currentStep
	);

	const values = {
		currentStep,
		setCurrentStep,
	};

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthContextHook = () => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error(
			"useAuthContextHook must be used within AuthContextProvider"
		);
	}

	return context;
};
