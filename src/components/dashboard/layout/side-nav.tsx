"use client";

import * as React from "react";
import stemkasaLogo from "@/assets/stemLogoNoBg.png";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import type { NavItemConfig } from "@/types/nav";

import { navItems } from "./config";
import { navIcons } from "./nav-icons";

interface SideNavProps {
	activeChatbot: string;
	onChatbotChange: (chatbotKey: string) => void;
}

export function SideNav({ activeChatbot, onChatbotChange }: SideNavProps): React.JSX.Element {
	return (
		<Box
			sx={{
				"--SideNav-background": "#ffffff",
				"--SideNav-color": "var(--mui-palette-common-black)",
				"--NavItem-color": "var(--mui-palette-neutral-600)",
				"--NavItem-hover-background": "rgba(0, 0, 0, 0.04)",
				"--NavItem-active-background": "#8b5cf6",
				"--NavItem-active-color": "#ffffff",
				"--NavItem-disabled-color": "var(--mui-palette-neutral-400)",
				"--NavItem-icon-color": "var(--mui-palette-neutral-500)",
				"--NavItem-icon-active-color": "#ffffff",
				"--NavItem-icon-disabled-color": "var(--mui-palette-neutral-300)",
				bgcolor: "var(--SideNav-background)",
				color: "var(--SideNav-color)",
				display: { xs: "none", lg: "flex" },
				flexDirection: "column",
				height: "100%",
				left: 0,
				maxWidth: "100%",
				position: "fixed",
				scrollbarWidth: "none",
				top: 0,
				width: "var(--SideNav-width)",
				zIndex: "var(--SideNav-zIndex)",
				boxShadow: "2px 0 4px rgba(0, 0, 0, 0.1)",
				borderRight: "1px solid var(--mui-palette-neutral-200)",
				"&::-webkit-scrollbar": { display: "none" },
			}}
		>
			<Stack spacing={2} sx={{ p: 3 }}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "80px",
					}}
				>
					<Box
						component="img"
						src={stemkasaLogo.src}
						alt="STEMKASA Logo"
						sx={{
							height: "100%",
							width: "auto",
							maxWidth: "100%",
							objectFit: "contain",
						}}
					/>
				</Box>
			</Stack>

			<Box component="nav" sx={{ flex: "1 1 auto", p: "12px" }}>
				{renderNavItems({ activeChatbot, onChatbotChange, items: navItems })}
			</Box>
			<Divider sx={{ borderColor: "var(--mui-palette-neutral-200)" }} />
		</Box>
	);
}

function renderNavItems({
	items = [],
	activeChatbot,
	onChatbotChange,
}: {
	items?: NavItemConfig[];
	activeChatbot: string;
	onChatbotChange: (chatbotKey: string) => void;
}): React.JSX.Element {
	const children = items.reduce((acc: React.ReactNode[], curr: NavItemConfig): React.ReactNode[] => {
		const { key, ...item } = curr;

		acc.push(
			<NavItem key={key} activeChatbot={activeChatbot} onChatbotChange={onChatbotChange} chatbotKey={key} {...item} />
		);

		return acc;
	}, []);

	return (
		<Stack component="ul" spacing={1} sx={{ listStyle: "none", m: 0, p: 0 }}>
			{children}
		</Stack>
	);
}

interface NavItemProps extends Omit<NavItemConfig, "items" | "href"> {
	activeChatbot: string;
	onChatbotChange: (chatbotKey: string) => void;
	chatbotKey: string;
}

function NavItem({
	disabled,
	icon,
	title,
	activeChatbot,
	onChatbotChange,
	chatbotKey,
}: NavItemProps): React.JSX.Element {
	const active = activeChatbot === chatbotKey;
	const Icon = icon ? navIcons[icon] : null;

	const handleClick = () => {
		if (!disabled) {
			onChatbotChange(chatbotKey);
		}
	};

	return (
		<li>
			<Box
				onClick={handleClick}
				sx={{
					alignItems: "center",
					borderRadius: 1,
					color: "var(--NavItem-color)",
					cursor: disabled ? "not-allowed" : "pointer",
					display: "flex",
					flex: "0 0 auto",
					gap: 1,
					p: "6px 16px",
					position: "relative",
					textDecoration: "none",
					whiteSpace: "nowrap",
					"&:hover":
						!disabled && !active
							? {
									bgcolor: "var(--NavItem-hover-background)",
								}
							: {},
					...(disabled && {
						bgcolor: "var(--NavItem-disabled-background)",
						color: "var(--NavItem-disabled-color)",
					}),
					...(active && {
						bgcolor: "var(--NavItem-active-background)",
						color: "var(--NavItem-active-color)",
					}),
				}}
			>
				<Box sx={{ alignItems: "center", display: "flex", justifyContent: "center", flex: "0 0 auto" }}>
					{Icon ? (
						<Icon
							fill={active ? "var(--NavItem-icon-active-color)" : "var(--NavItem-icon-color)"}
							fontSize="var(--icon-fontSize-md)"
							weight={active ? "fill" : undefined}
						/>
					) : null}
				</Box>
				<Box sx={{ flex: "1 1 auto" }}>
					<Typography
						component="span"
						sx={{ color: "inherit", fontSize: "0.875rem", fontWeight: 500, lineHeight: "28px" }}
					>
						{title}
					</Typography>
				</Box>
			</Box>
		</li>
	);
}
