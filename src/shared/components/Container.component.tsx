import { BoxProps, createBox } from "@shopify/restyle";
import * as React from "react";

import { Theme } from "../themes/theme";

const Box = createBox<Theme>();

export const Container = ({
  children,
  ...props
}: React.PropsWithChildren<BoxProps<Theme>>) => (
  <Box backgroundColor="mainBackground" flex={1} {...props}>
    {children}
  </Box>
);
