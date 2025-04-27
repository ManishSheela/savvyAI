"use client";

import { createContext, useContext, useState } from "react";

type InitialValuesProps = {
	currentStep: number;
	setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

// Define the initial values properly
const InitialValues: InitialValuesProps = {
	currentStep: 1,
	setCurrentStep: () => {},
};

// Create the context
const AuthContext = createContext<InitialValuesProps>(InitialValues);

export const AuthContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [currentStep, setCurrentStep] = useState<number>(
		InitialValues.currentStep
	);

	// Context values passed to the provider
	const values = {
		currentStep,
		setCurrentStep,
	};

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

// Custom hook for consuming the context
export const useAuthContextHook = () => {
	const context = useContext(AuthContext);
	
	if (!context) {
		throw new Error("useAuthContextHook must be used within AuthContextProvider");
	}

	return context;
};
