import ButtonHandler from "@/components/forms/sign-up/button-handler";
import HighLightBar from "@/components/forms/sign-up/highlight-bar";
import RegistrationFormStep from "@/components/forms/sign-up/registration-step";
import SignUpFormProvider from "@/components/forms/sign-up/sign-up-form-provider";
import React from "react";

type Props = {};

const SignUp = (props: Props) => {
	return (
		<div className="flex-1 flex justify-center items-center md:px-16 w-full h-full">
			<div className="flex flex-col gap-3 w-full">
				<SignUpFormProvider>
					<div className="flex flex-col gap-3 py-8">
						<RegistrationFormStep />
						<ButtonHandler />
					</div>
					<HighLightBar />
				</SignUpFormProvider>
			</div>
		</div>
	);
};

export default SignUp;
