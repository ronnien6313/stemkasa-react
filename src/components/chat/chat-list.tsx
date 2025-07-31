"use client";

import * as React from "react";
import { Box, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { DotsThree, Plus } from "@phosphor-icons/react";

export function ChatList(): React.JSX.Element {
	return (
		<Box
			sx={{
				width: "100%",
				height: "100%",
				bgcolor: "#f5f5f5",
				borderRight: "1px solid #e5e7eb",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					p: 2,
					bgcolor: "#f5f5f5",
					borderBottom: "1px solid #e5e7eb",
				}}
			>
				<Typography
					variant="h6"
					sx={{
						fontWeight: 600,
						color: "#374151",
						fontSize: "1.1rem",
					}}
				>
					Chats
				</Typography>
				<IconButton
					sx={{
						bgcolor: "#7c3aed",
						color: "white",
						width: 32,
						height: 32,
						"&:hover": {
							bgcolor: "#6d28d9",
						},
					}}
				>
					<Plus size={16} weight="bold" />
				</IconButton>
			</Box>

			<List sx={{ flex: 1, overflow: "auto", p: 0 }}>
				<ListItem disablePadding>
					<ListItemButton
						sx={{
							bgcolor: "#7c3aed",
							color: "white",
							mx: 1,
							my: 0.5,
							borderRadius: 1,
							"&:hover": {
								bgcolor: "#6d28d9",
							},
						}}
					>
						<ListItemText
							primary="New Chat..."
							primaryTypographyProps={{
								fontSize: "0.9rem",
								fontWeight: 500,
							}}
						/>
						<DotsThree size={24} weight="bold" style={{ opacity: 0.7 }} />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);
}
