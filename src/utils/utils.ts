import * as Notifications from 'expo-notifications';
import {Platform} from 'react-native';

// Tipos
type NotificationContent = {
    title: string;
    body: string;
    data?: Record<string, unknown>;
};

type NotificationTrigger = {
    seconds: number;
};

// Configura o canal de notificação para Android (se necessário)
// if (Platform.OS === 'android') {
//     Notifications.setNotificationChannelAsync('default', {
//         name: 'default',
//         importance: Notifications.AndroidImportance.MAX,
//         vibrationPattern: [0, 250, 250, 250],
//         lightColor: '#FF231F7C',
//     });
// } else  {
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: false,
          shouldSetBadge: false,
        //   priority: Notifications.AndroidNotificationPriority.HIGH,
        }),
      });
      
// }

// Função para pedir permissão e enviar notificação
export const sendLocalNotification = async (
    title: string,
    body: string,
    seconds: number,
): Promise<void> => {
    // Pede permissão para enviar notificações
    const {status} = await Notifications.requestPermissionsAsync();
    if (status !== 'granted') {
        console.warn('Permissão para notificações negada.');
        return;
    }

    // Agenda a notificação
    await Notifications.scheduleNotificationAsync({
        content: {
            title,
            body,
            data: {someData: 'Clique para mais detalhes'},
        } as NotificationContent,
        trigger: {seconds: 1},
    });
};


export const convertToCurrency = (number: number): string => {
    const formattedCurrency = Intl.NumberFormat('pt-AO', {
      style: 'currency',
      currency: 'AOA',
      notation: 'compact',
    }).format(number);
  
    return formattedCurrency; //.replace('AOA', 'Kwanza');
  };
  