import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Appbar, TouchableRipple, useTheme, Avatar } from "react-native-paper";
import { View, StyleSheet } from "react-native";

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
      <TouchableRipple
        onPress={() => console.log("Notification icon pressed")}
        style={styles.ripple}
        borderless
        // rippleColor={theme.colors.primary}
      >
        <View style={styles.iconContainer}>
          <Ionicons
            name="notifications-outline"
            size={30}
            color={theme.colors.onBackground}
          />
        </View>
      </TouchableRipple>
      <Appbar.Content
        title={
          <Avatar.Image
            size={50}
            style={{ backgroundColor: "transparent" }}
            source={require("../../assets/images/basket.png")}
          />
        }
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  ripple: {
    borderRadius: 25, // Para que o efeito seja circular
    overflow: "hidden", // Garantir que o efeito ripple se mantenha dentro do círculo
    marginLeft: 10, // Ajuste de margem, se necessário
  },
  iconContainer: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
});

export default CustomNavigationBar;
