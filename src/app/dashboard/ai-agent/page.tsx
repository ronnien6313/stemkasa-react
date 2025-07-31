import * as React from "react";
import type { Metadata } from "next";
import Grid from "@mui/material/Grid";

import { config } from "@/config";
import { ChatBox } from "@/components/chat/chat-box";
import { ChatContent } from "@/components/chat/chat-content";
import { ChatList } from "@/components/chat/chat-list";

export const metadata = { title: `AI Agent | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
	return (
		<Grid container spacing={0.5}>
			<Grid size={4}>
				<ChatList />
			</Grid>
			<Grid size={4}>
				<ChatBox />
			</Grid>
			<Grid>
				<ChatContent />
			</Grid>
		</Grid>
	);
}
