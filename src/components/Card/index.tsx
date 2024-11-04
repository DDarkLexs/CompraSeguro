import React, { FC, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Text, Checkbox, useTheme } from 'react-native-paper';

// Componente reutilizável para exibir uma tarefa
interface TaskCardProps {
  title: string;
  total: string;
  time: string;
  status: string;
  onPress: () => void;
}

const TaskCard: FC<TaskCardProps> = ({ title, total, time, status,onPress}) => {
    const theme = useTheme();


  const styles = StyleSheet.create({
    cardContainer: {
      
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      borderRadius: 12,
      backgroundColor: theme.colors.inversePrimary,
    },
    sideBar: {
      width: 10,
      shadowOpacity:0,
      elevation: 0,

      shadowOffset: { width: 0, height: 0 },
      borderColor: 'red',
    },
    cardContent: {
      // flex: 1,
      padding: 15,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
    taskInfo: {
      flex: 1,
      fontFamily: 'Nunito-SemiBold',
    },
    taskTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      fontFamily: 'Nunito-SemiBold',
    },
    taskDescription: {
      fontSize: 14,
      color: '#555',
      marginBottom: 5,
      fontFamily: 'Nunito-Regular',
    },
    taskTimePriority: {
      fontSize: 13,
      color: '#888',
    },
  });

  return (
    // <TouchableOpacity onPress={() => {
      
    // }}>
      <View style={styles.cardContainer}>
        <View style={styles.sideBar} />
        <Card onPress={onPress} style={{ flex: 1, borderRadius: 12 }}>
          <Card.Content style={styles.cardContent}>
            <View style={styles.taskInfo}>
              <Text style={styles.taskTitle}>{title}</Text>
              {total ? <Text style={styles.taskDescription}>{total}</Text> : null}
              <Text style={styles.taskTimePriority}>{time} • {status}</Text>
            </View>
          </Card.Content>
        </Card>
      </View>
    // </TouchableOpacity>
  );
};

export default TaskCard;

