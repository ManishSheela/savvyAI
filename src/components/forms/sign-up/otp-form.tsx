import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";
import React from "react";

type Props = {
	setOTP: React.Dispatch<React.SetStateAction<string>>;
	onOTP: string;
};

const OTPForm = ({ onOTP, setOTP }: Props) => {
	return (
		<>
			<h2 className="text-gravel md:text-2xl font-bold">Enter OTP</h2>
			<p className="text-iridium md:text-sm">
				Enter the one time password that was sent to your email.
			</p>
			<div className="w-full justify-center flex py-5">
				<InputOTP maxLength={6} value={onOTP} onChange={(otp) => setOTP(otp)}>
					<div className="flex gap-3">
						<div>
							<InputOTPSlot index={0} />
						</div>
						<div>
							<InputOTPSlot index={1} />
						</div>
						<div>
							<InputOTPSlot index={2} />
						</div>
						<div>
							<InputOTPSlot index={3} />
						</div>
						<div>
							<InputOTPSlot index={4} />
						</div>
						<div>
							<InputOTPSlot index={5} />
						</div>
					</div>
				</InputOTP>
			</div>
		</>
	);
};

export default OTPForm;
