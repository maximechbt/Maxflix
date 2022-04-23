import { BoxProps, createBox } from "@shopify/restyle";
import * as React from "react";

import { Theme } from "../themes/theme";
import { Text } from "./Text.component";

const Box = createBox<Theme>();

type Props = BoxProps<Theme> & { label: string };

export const Chips = ({ label, ...props }: Props) => (
	<Box
		backgroundColor="chipsBackground"
		justifyContent="center"
		alignItems="center"
		padding="s"
		paddingHorizontal="m"
		borderRadius={10}
		margin="s"
		{...props}
	>
		<Text textAlign={"center"}>{label}</Text>
	</Box>
);
