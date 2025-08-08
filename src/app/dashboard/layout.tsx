"use client";

import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import GlobalStyles from "@mui/material/GlobalStyles";
import Grid from "@mui/material/Grid";
// Import settings components
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { AuthGuard } from "@/components/auth/auth-guard";
import { ChatBox } from "@/components/chat/chat-box";
import { ChatContent } from "@/components/chat/chat-content";
import { ChatList } from "@/components/chat/chat-list";
import { navItems } from "@/components/dashboard/layout/config";
import { MainNav } from "@/components/dashboard/layout/main-nav";
import { SideNav } from "@/components/dashboard/layout/side-nav";
import { Notifications } from "@/components/dashboard/settings/notifications";
import { UpdatePasswordForm } from "@/components/dashboard/settings/update-password-form";

export default function Layout({ children }: { children: React.ReactNode }): React.JSX.Element {
	const [activeChatbot, setActiveChatbot] = useState("aiAgent");

	const handleChatbotChange = (chatbotKey: string) => {
		setActiveChatbot(chatbotKey);
	};

	const renderChatbot = () => {
		if (activeChatbot === "settings") {
			return (
				<Box sx={{ p: 3 }}>
					<Stack spacing={3}>
						<div>
							<Typography variant="h4">Settings</Typography>
						</div>
						<Notifications />
						<UpdatePasswordForm />
					</Stack>
				</Box>
			);
		}

		const currentChatbot = navItems.find((item) => item.key === activeChatbot);
		const chatbotName = currentChatbot?.title || "AI Assistant";

		return (
			<Grid container spacing={0} sx={{ height: "calc(100vh - 56px)" }}>
				<Grid size={2}>
					<ChatList />
				</Grid>
				<Grid size={10}>
					<ChatBox chatbotName={chatbotName} chatbotKey={activeChatbot} />
				</Grid>
				{/* <Grid size={3}>
					<ChatContent />
				</Grid> */}
			</Grid>
		);
	};
	return (
		<AuthGuard>
			<GlobalStyles
				styles={{
					body: {
						"--MainNav-height": "56px",
						"--MainNav-zIndex": 1000,
						"--SideNav-width": "280px",
						"--SideNav-zIndex": 1100,
						"--MobileNav-width": "320px",
						"--MobileNav-zIndex": 1100,
					},
				}}
			/>
			<Box
				sx={{
					bgcolor: "var(--mui-palette-background-default)",
					display: "flex",
					flexDirection: "column",
					position: "relative",
					minHeight: "100%",
				}}
			>
				<SideNav activeChatbot={activeChatbot} onChatbotChange={handleChatbotChange} />
				<Box sx={{ display: "flex", flex: "1 1 auto", flexDirection: "column", pl: { lg: "var(--SideNav-width)" } }}>
					<MainNav />
					<Box
						component="main"
						sx={{
							flex: 1,
							overflow: activeChatbot === "settings" ? "auto" : "hidden",
						}}
					>
						{renderChatbot()}
					</Box>
				</Box>
			</Box>
		</AuthGuard>
	);
}
