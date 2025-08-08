"use client";

import * as React from "react";
import { Avatar, Box, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import { Image, Microphone, Paperclip, PaperPlaneTilt } from "@phosphor-icons/react";

interface ChatBoxProps {
	chatbotName?: string;
	chatbotKey?: string;
}

export function ChatBox({ chatbotName = "AI Assistant", chatbotKey = "default" }: ChatBoxProps): React.JSX.Element {
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
						bgcolor: "#8b5cf6",
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
						<Typography variant="body2">Hi</Typography>
					</Paper>
				</Box>
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
										size="small"
										sx={{
											bgcolor: "#8b5cf6",
											color: "white",
											width: 32,
											height: 32,
											borderRadius: "50%",
											"&:hover": {
												bgcolor: "#7c3aed",
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
									borderColor: "#8b5cf6",
								},
								"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
									borderColor: "#8b5cf6",
								},
							},
						}}
					/>
				</Box>
			</Box>
		</Box>
	);
}
