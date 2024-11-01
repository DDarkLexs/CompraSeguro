import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, useTheme } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const theme = useTheme();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Citação Inspiradora */}
      <Card style={[styles.quoteCard, { backgroundColor: theme.colors.backdrop}]}>
        <Card.Content>
          <Text style={styles.quoteText}>
            Por cada minuto gasto em organizar, uma hora é ganha.
          </Text>
        </Card.Content>
      </Card>

      {/* Seção de Atividade */}
      <View style={styles.activitySection}>
        <Text style={styles.activityTitle}>Atividade</Text>
        <Text style={styles.activityDate}>Hoje, 9 de setembro de 2024</Text>

        {/* Ícones de Filtro */}
        <View style={styles.filterIcons}>
          <Ionicons name="sunny-outline" size={24} color={theme.colors.primary} style={styles.icon} />
          <Ionicons name="calendar-outline" size={24} color={theme.colors.primary} style={styles.icon} />
        </View>
      </View>

      {/* Cartões de Tarefas */}
      <View style={styles.cardsContainer}>
        <TaskCard title="Todas" count="09" color={theme.colors.primary} icon="checkmark-circle-outline" />
        <TaskCard title="Para fazer" count="03" color={theme.colors.tertiary} icon="clipboard-outline" />
        <TaskCard title="Concluídas" count="02" color={theme.colors.primary} icon="checkmark-done-outline" />
        <TaskCard title="Pendentes" count="02" color={theme.colors.secondary} icon="timer-outline" />
        <TaskCard title="Atrasadas" count="02" color={theme.colors.error} icon="alert-circle-outline" />
      </View>
    </ScrollView>
  );
};

// Componente para Cartões de Tarefas
const TaskCard = ({ title, count, color, icon }: { title: string, count: string, color: string, icon: any }) => {
  const theme = useTheme();

  return (
    <Card style={{ backgroundColor: theme.colors.background, ...styles.taskCard }}>
      <Card.Content>
        <View style={styles.taskHeader}>
          <Text style={styles.taskTitle}>{title}</Text>
          <Ionicons name={icon} size={20}  color={"gray"} style={styles.taskIcon} />
        </View>
        <View style={styles.taskFooter}>
          <Text style={[styles.taskCount, { color: color }]}>{count}</Text>
          <Text style={styles.taskLabel}>tarefas</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  quoteCard: {
    borderRadius: 12,
    marginBottom: 20,
    fontFamily: "Nunito-Bold",
    padding: 20,
  },
  quoteText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: "Nunito-Bold",
  },
  activitySection: {
    marginBottom: 20,
  },
  activityTitle: {
    fontSize: 18,
    fontFamily: "Nunito-Bold",
  },
  activityDate: {
    color: '#6b6b6b',
    fontFamily: "Nunito-Bold",
  },
  filterIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    marginLeft: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  taskCard: {
    width: '48%',
    marginBottom: 16,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    shadowColor: 'gray',
    shadowOpacity: 0.1,
  },
  taskHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  taskFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskCount: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 4,
    fontFamily: "Nunito-Bold",
  },
  taskLabel: {
    fontFamily: "Nunito-Bold",
    color: '#6b6b6b',
    fontSize: 12,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: "Nunito-Bold",
  },
  taskIcon: {
    marginLeft: 'auto',
  },
});

export default HomeScreen;


