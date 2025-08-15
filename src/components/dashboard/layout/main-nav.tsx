"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import { BellIcon } from "@phosphor-icons/react/dist/ssr/Bell";
import { ListIcon } from "@phosphor-icons/react/dist/ssr/List";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/ssr/MagnifyingGlass";
import { UsersIcon } from "@phosphor-icons/react/dist/ssr/Users";

import { usePopover } from "@/hooks/use-popover";

import { MobileNav } from "./mobile-nav";
import { UserPopover } from "./user-popover";

export function MainNav(): React.JSX.Element {
	const [openNav, setOpenNav] = React.useState<boolean>(false);

	const userPopover = usePopover<HTMLDivElement>();

	return (
		<React.Fragment>
			<Box
				component="header"
				sx={{
					borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
					backgroundColor: "#6d28d9",
					color: "white",
					position: "sticky",
					top: 0,
					zIndex: "var(--mui-zIndex-appBar)",
					boxShadow: "0 4px 12px rgba(109, 40, 217, 0.3)",
				}}
			>
				<Stack
					direction="row"
					spacing={2}
					sx={{ alignItems: "center", justifyContent: "space-between", minHeight: "64px", px: 2 }}
				>
					<Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
						<IconButton
							onClick={(): void => {
								setOpenNav(true);
							}}
							sx={{
								display: { lg: "none" },
								color: "white",
								"&:hover": {
									backgroundColor: "rgba(255, 255, 255, 0.1)",
								},
							}}
						>
							<ListIcon />
						</IconButton>
						<Tooltip title="Search">
							<IconButton
								sx={{
									color: "white",
									"&:hover": {
										backgroundColor: "rgba(255, 255, 255, 0.1)",
									},
								}}
							>
								<MagnifyingGlassIcon />
							</IconButton>
						</Tooltip>
					</Stack>
					<Stack sx={{ alignItems: "center" }} direction="row" spacing={2}>
						<Tooltip title="Contacts">
							<IconButton
								sx={{
									color: "white",
									"&:hover": {
										backgroundColor: "rgba(255, 255, 255, 0.1)",
									},
								}}
							>
								<UsersIcon />
							</IconButton>
						</Tooltip>
						<Tooltip title="Notifications">
							<Badge badgeContent={4} color="success" variant="dot">
								<IconButton
									sx={{
										color: "white",
										"&:hover": {
											backgroundColor: "rgba(255, 255, 255, 0.1)",
										},
									}}
								>
									<BellIcon />
								</IconButton>
							</Badge>
						</Tooltip>
						<Avatar
							onClick={userPopover.handleOpen}
							ref={userPopover.anchorRef}
							src="/assets/avatar.png"
							sx={{
								cursor: "pointer",
								border: "2px solid rgba(255, 255, 255, 0.2)",
								"&:hover": {
									border: "2px solid rgba(255, 255, 255, 0.4)",
								},
							}}
						/>
					</Stack>
				</Stack>
			</Box>
			<UserPopover anchorEl={userPopover.anchorRef.current} onClose={userPopover.handleClose} open={userPopover.open} />
			<MobileNav
				onClose={() => {
					setOpenNav(false);
				}}
				open={openNav}
			/>
		</React.Fragment>
	);
}
