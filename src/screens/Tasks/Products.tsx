import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, List, Checkbox, FAB } from 'react-native-paper';
import { Routes } from '../../constants/enums';

const ProductsScreen: React.FC<
  NativeStackScreenProps<StackScreen, Routes.PRODUCTS>
> = ({ navigation, route }): React.JSX.Element => {
  const [reminders, setReminders] = React.useState([
    { id: 1, text: 'Hit the gym or go for a run', priority: 'High', completed: false },
    { id: 2, text: 'Call the bank', priority: 'Normal', completed: false },
    {
      id: 3,
      text: 'Drink more water, stay hydrated',
      priority: 'High',
      date: '2024-03-25, 10:00 am',
      repeat: 'Daily',
      completed: false,
    },
  ]);

  const handleToggle = (reminderId: number) => {
    setReminders(
      reminders.map((reminder) =>
        reminder.id === reminderId
          ? { ...reminder, completed: !reminder.completed }
          : reminder
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reminders</Text>
      <ScrollView>
        {reminders.map((reminder) => (
          <View key={reminder.id} style={styles.reminderItem}>
            <Checkbox
              status={reminder.completed ? 'checked' : 'unchecked'}
              onPress={() => handleToggle(reminder.id)}
              color="#ff5722"
            />
            <View style={styles.reminderTextContainer}>
              <Text style={styles.reminderText}>{reminder.text}</Text>
              <Text style={styles.priorityText}>
                • {reminder.priority} priority
              </Text>
              {reminder.date && (
                <Text style={styles.dateText}>
                  {reminder.date} {reminder.repeat && `• ${reminder.repeat}`}
                </Text>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
      <FAB
        style={styles.fab}
        icon="plus"
        label="Add a new reminder"
        onPress={() => console.log('Add new reminder')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  reminderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  reminderTextContainer: {
    flexDirection: 'column',
    marginLeft: 8,
  },
  reminderText: {
    fontSize: 16,
    fontWeight: '500',
  },
  priorityText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
  dateText: {
    color: 'orange',
    fontSize: 12,
    marginTop: 4,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#ff5722',
  },
});

export default ProductsScreen;
