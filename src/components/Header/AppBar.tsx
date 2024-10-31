import React from "react";
import { Appbar, useTheme } from "react-native-paper";

const CustomNavigationBar = (props: any) => {
  const theme = useTheme();

  return (
    <Appbar.Header
      style={{
        backgroundColor: theme.colors.background,
        elevation: 3,
        shadowOpacity: 0.1,
        shadowOffset: {
          width: 0,
          height: 0,
        },
      }}
      {...props}
    >
      <Appbar.Content title="{logo}" />
    </Appbar.Header>
  );
};

export default CustomNavigationBar;

