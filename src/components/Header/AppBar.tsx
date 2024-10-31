import React from "react";
import { Appbar, useTheme } from "react-native-paper";

const CustomNavigationBar = (props: any) => {
  const theme = useTheme();

  return (
    <Appbar.Header
      style={{
        backgroundColor: theme.colors.background,
        elevation: 2,
        shadowOpacity: 0.5,
        shadowOffset: {
          width: 0,
          height: 1.2,
        },
      }}
      {...props}
    >
      <Appbar.Content title="My awesome app" />
    </Appbar.Header>
  );
};

export default CustomNavigationBar;

