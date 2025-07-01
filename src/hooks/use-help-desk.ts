import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "./use-toast";
import { HelpDeskQuestionsSchema } from "@/schemas/settings.schems";
import { onCreateHelpDeskQuestion } from "@/actions/settings";

type HelpDeskQuestionsProps = {
	question: string;
	answer: string;
};

const useHelpDesk = (id: string) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<HelpDeskQuestionsProps>({
		resolver: zodResolver(HelpDeskQuestionsSchema),
		mode: "onChange",
	});
	const [loading, setLoading] = useState<boolean>(false);
	const { toast } = useToast();
	const [isQuestions, setIsQuestions] = useState<
		{ id: string; question: string; answer: string }[]
	>([]);

	const onSubmitQuestion = handleSubmit(async (values) => {
		const { question, answer } = values;

		setLoading(true);
		const createdQuestion = await onCreateHelpDeskQuestion(
			id,
			question,
			answer
		);

		if (createdQuestion) {
			setIsQuestions(createdQuestion.questions);
			toast({
				title: createdQuestion.status === 200 ? "Success" : "Error",
				description: createdQuestion.message,
			});
			setLoading(false);
			reset();
		}
	});

	const onGetQuestion = async () => {};
	return { loading, toast, isQuestions, onSubmitQuestion, onGetQuestion };
};

export default useHelpDesk;
