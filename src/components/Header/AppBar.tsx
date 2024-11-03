import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar, Avatar, TouchableRipple, useTheme} from 'react-native-paper';

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
            <Appbar.Action
                icon={() => (
                    <TouchableRipple
                        onPress={() => console.log('Notification icon pressed')}
                        style={styles.ripple}
                        borderless
                        // rippleColor={theme.colors.primary}
                    >
                        <View style={styles.iconContainer}>
                            <Ionicons
                                name='notifications-outline'
                                size={25}
                                color={theme.colors.onBackground}
                            />
                        </View>
                    </TouchableRipple>
                )}
            />

            <Appbar.Content
                title={
                    <Avatar.Image
                        size={50}
                        style={{
                            backgroundColor: 'transparent',
                            alignSelf: 'center', // Posiciona a imagem no meio
                        }}
                        source={require('../../assets/images/basket.png')}
                    />
                }
            />
        </Appbar.Header>
    );
};
const styles = StyleSheet.create({
    ripple: {
        // borderRadius: 25, // Para que o efeito seja circular
        // overflow: 'hidden', // Garantir que o efeito ripple se mantenha dentro do círculo
        // marginLeft: 10, // Ajuste de margem, se necessário
    },
    iconContainer: {
        // width: 50,
        // height: 50,
        // alignItems: 'center',
        // justifyContent: 'center',
        // borderRadius: 25,
    },
});

export default CustomNavigationBar;
