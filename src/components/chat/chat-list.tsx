"use client";

import * as React from "react";
import { Box, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Plus, Trash } from "@phosphor-icons/react";

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
						bgcolor: "#8b5cf6",
						color: "white",
						width: 32,
						height: 32,
						minWidth: 32,
						minHeight: 32,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						padding: "0 !important",
						margin: 0,
						borderRadius: "50%",
						"& .MuiTouchRipple-root": {
							display: "none",
						},
						"&:hover": {
							bgcolor: "#6d28d9",
						},
					}}
				>
					<Plus size={14} weight="bold" style={{ display: "block" }} />
				</IconButton>
			</Box>

			<List sx={{ flex: 1, overflow: "auto", p: 0 }}>
				<ListItem disablePadding>
					<ListItemButton
						sx={{
							bgcolor: "#8b5cf6",
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
						<Trash size={24} weight="bold" style={{ opacity: 0.7 }} />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);
}
