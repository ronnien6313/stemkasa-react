import * as React from "react";
import type { Metadata } from "next";
import Box from "@mui/material/Box";

import { config } from "@/config";
import { ChatBox } from "@/components/chat/chat-box";
import { ChatContent } from "@/components/chat/chat-content";
import { ChatList } from "@/components/chat/chat-list";

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
	return (
		<Box
			sx={{
				display: "flex",
				height: "calc(100vh - 56px)", // Full height minus MainNav
				width: "100%",
				margin: 0,
				padding: 0,
			}}
		>
			<Box sx={{ flex: "1 1 15%", height: "100%", margin: 0, padding: 0 }}>
				<ChatList />
			</Box>
			<Box sx={{ flex: "1 1 40%", height: "100%", margin: 0, padding: 0 }}>
				<ChatBox />
			</Box>
			<Box sx={{ flex: "1 1 45%", height: "100%", margin: 0, padding: 0 }}>
				<ChatContent />
			</Box>
		</Box>
	);
}
