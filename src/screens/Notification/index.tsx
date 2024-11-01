import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Nova Mensagem",
      description: "Você recebeu uma nova mensagem de João",
      time: "5 min atrás"
    },
    {
      id: 2,
      title: "Atualização Disponível",
      description: "Uma nova atualização do app está disponível",
      time: "1 dia atrás"
    },
    {
      id: 3,
      title: "Oferta Especial",
      description: "Aproveite 50% de desconto em produtos selecionados",
      time: "2 dias atrás"
    },
  ]);

  const handleDismiss = (id: any ) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <ScrollView style={styles.container}>
      {notifications.map(notification => (
        <Card key={notification.id} style={styles.card}>
          <Card.Content>
            <Title>{notification.title}</Title>
            <Paragraph>{notification.description}</Paragraph>
            <Paragraph style={styles.timeText}>{notification.time}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <IconButton
              icon="close"
              onPress={() => handleDismiss(notification.id)}
              accessibilityLabel="Dismiss notification"
            />
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  timeText: {
    color: 'gray',
    fontSize: 12,
  },
});

export default NotificationScreen;
