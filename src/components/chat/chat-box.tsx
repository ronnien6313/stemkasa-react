"use client";

import React, { useEffect, useState } from "react";
import { Avatar, Box, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import { Image, Microphone, Paperclip, PaperPlaneTilt } from "@phosphor-icons/react";

import { ApiClient, ChatMessage } from "../../lib/chat-api-client";

interface ChatBoxProps {
	chatbotName: string;
	chatbotKey: string;
}

const getChatbotWelcomeMessage = (chatbotKey: string): string => {
	switch (chatbotKey) {
		case "AIAgent":
			return "Please describe the AI agent you want to create. Include details about its personality, knowledge areas, and how it should interact with users.";
		case "Claude":
			return "Hi! I'm Claude, please provide your question.";
		case "ConversationalAppCreator":
			return "Please briefly describe the purpose of your app, what information will it require from its user, and what should it display to them.";
		case "Deepfake":
			return "Hello! I am Deepfake detection assistant.";
		case "ImageGenerator":
			return "Please let me know what you are trying to innovate?";
		case "ListAgents":
			return "Here are all your ElevenLabs agents:";
		case "QuizGenerator":
			return "Please provide the article/document/topic that you want to generate a quiz for.";
		case "QuoteImageGenerator":
			return "Please provide the subject of the quote you want.";
		case "StatisticalDataAnalyzer":
			return "Please provide me with the data you want to analyze.";
		case "StoryTellingApp":
			return "Please provide your age and the topic of the story.";
		case "ToDoAssistant":
			return "How can I help you with your tasks today?";
		case "Settings":
			return "How can I help you with your settings?";
		default:
			return "Hello! How can I help you today?";
	}
};

export function ChatBox({ chatbotName, chatbotKey }: ChatBoxProps): React.JSX.Element {
	const apiClient = new ApiClient();
	const [messages, setMessages] = useState<ChatMessage[]>([]);
	const [inputValue, setInputValue] = useState("");
	const [currentChatId, setCurrentChatId] = useState("");

	useEffect(() => {
		const newChatId = apiClient.generateChatId();
		setCurrentChatId(newChatId);
	}, []);

	useEffect(() => {
		setMessages([]);
		setInputValue("");
		const newChatId = apiClient.generateChatId();
		setCurrentChatId(newChatId);
	}, [chatbotKey]);

	const handleSend = async () => {
		if (!inputValue.trim() || !currentChatId) return;

		const userMessage = inputValue.trim();
		setInputValue("");

		setMessages((prev) => [...prev, { message: userMessage }]);

		try {
			const response = await apiClient.postMessage(currentChatId, userMessage, chatbotKey);

			setMessages((prev) => [...prev, response]);
		} catch (error) {
			console.error("Error sending message:", error);
			setMessages((prev) => [...prev, { message: "Error sending message" }]);
		}
	};

	const handleKeyPress = (event: React.KeyboardEvent) => {
		if (event.key === "Enter" && !event.shiftKey) {
			event.preventDefault();
			handleSend();
		}
	};
	return (
		<Box
			sx={{
				height: "100%",
				display: "flex",
				flexDirection: "column",
				bgcolor: "#fafafa",
			}}
		>
			<Box
				sx={{
					p: 2,
					bgcolor: "white",
					display: "flex",
					alignItems: "center",
					gap: 1,
				}}
			>
				<Avatar
					sx={{
						bgcolor: "#6d28d9",
						width: 32,
						height: 32,
						fontSize: "16px",
					}}
				>
					{chatbotName.charAt(0).toUpperCase()}
				</Avatar>
				<Typography
					variant="subtitle1"
					sx={{
						color: "#4a4a4a",
						fontWeight: 500,
					}}
				>
					{chatbotName}
				</Typography>
			</Box>

			<Box
				sx={{
					flex: 1,
					overflow: "auto",
					p: 2,
					display: "flex",
					flexDirection: "column",
					gap: 2,
					bgcolor: "white",
				}}
			>
				{/* Welcome message */}
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-start",
						mb: 1,
					}}
				>
					<Paper
						sx={{
							p: 2,
							maxWidth: "80%",
							bgcolor: "#f8f9fa",
							color: "#333",
							borderRadius: 2,
							boxShadow: "none",
							border: "1px solid #dee2e6",
						}}
					>
						<Typography variant="body2">{getChatbotWelcomeMessage(chatbotKey)}</Typography>
					</Paper>
				</Box>

				{/* Chat messages */}
				{messages.map((msg, index) => {
					const isUser = index % 2 === 0;
					return (
						<Box
							key={index}
							sx={{
								display: "flex",
								justifyContent: isUser ? "flex-end" : "flex-start",
							}}
						>
							<Paper
								sx={{
									p: 2,
									maxWidth: "80%",
									bgcolor: isUser ? "#007bff" : "#f8f9fa",
									color: isUser ? "white" : "#333",
									borderRadius: 2,
									boxShadow: "none",
									border: isUser ? "none" : "1px solid #dee2e6",
								}}
							>
								<Typography variant="body2">{msg.message.replace(/<\/?p>/g, "")}</Typography>
							</Paper>
						</Box>
					);
				})}
			</Box>

			<Box
				sx={{
					p: 3,
					bgcolor: "white",
				}}
			>
				<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
					{/* User Avatar */}
					<Avatar sx={{ width: 36, height: 36, bgcolor: "#9e9e9e" }}>
						<Typography variant="caption" sx={{ color: "white", fontSize: "14px" }}>
							G
						</Typography>
					</Avatar>

					<TextField
						fullWidth
						placeholder="Your message here"
						variant="outlined"
						size="medium"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyPress={handleKeyPress}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<IconButton size="small" sx={{ color: "#6c757d", p: 0.5 }}>
										<Microphone size={16} />
									</IconButton>
									<IconButton size="small" sx={{ color: "#6c757d", p: 0.5 }}>
										<Image size={16} />
									</IconButton>
									<IconButton size="small" sx={{ color: "#6c757d", p: 0.5 }}>
										<Paperclip size={16} />
									</IconButton>
								</InputAdornment>
							),
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										onClick={handleSend}
										disabled={!inputValue.trim()}
										size="small"
										sx={{
											bgcolor: "#6d28d9",
											color: "white",
											width: 32,
											height: 32,
											borderRadius: "50%",
											"&:hover": {
												bgcolor: "#5b21b6",
											},
											"&:disabled": {
												bgcolor: "#ccc",
											},
										}}
									>
										<PaperPlaneTilt size={16} />
									</IconButton>
								</InputAdornment>
							),
							sx: {
								borderRadius: 3,
								bgcolor: "white",
								"& .MuiOutlinedInput-notchedOutline": {
									borderColor: "#dee2e6",
								},
								"&:hover .MuiOutlinedInput-notchedOutline": {
									borderColor: "#6d28d9",
								},
								"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
									borderColor: "#6d28d9",
								},
							},
						}}
					/>
				</Box>
			</Box>
		</Box>
	);
}
