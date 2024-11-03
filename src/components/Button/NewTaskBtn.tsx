import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme, TouchableRipple } from 'react-native-paper';

interface CustomTabButtonProps {
  onPress: () => void;
}

const CustomTabButton: React.FC<CustomTabButtonProps> = ({ onPress }) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    buttonContainer: {
      borderRadius: 30,
      // top: -20,
      zIndex: 1,
      position: "absolute",
      backgroundColor: theme.colors.inversePrimary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainerShadow: {
      width: 60,
      height: 60,
      borderRadius: 30,
      top: -20,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      // elevation: 5, // Adiciona sombra para um efeito de profundidade
    },
    iconContainer: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: theme.colors.inversePrimary,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.buttonContainerShadow}>
      <TouchableRipple
        style={styles.buttonContainer}
        onPress={onPress}
        rippleColor={theme.colors.onPrimary} // Cor do efeito de ripple
        borderless={true} // Sem borda no ripple
      >
        <View style={styles.iconContainer}>
          <Ionicons name="add-circle" size={30} color={theme.colors.background} />
        </View>
      </TouchableRipple>
    </View>
  );
};

export default CustomTabButton;
