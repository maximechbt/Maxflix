import { BoxProps, createBox } from "@shopify/restyle";
import * as React from "react";

import { Theme } from "../themes/theme";

const Box = createBox<Theme>();

export const View = ({
  children,
  ...props
}: React.PropsWithChildren<BoxProps<Theme>>) => (
  <Box {...props}>{children}</Box>
);
