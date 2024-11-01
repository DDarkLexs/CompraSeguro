import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Text, Card, Button, RadioButton, useTheme, Chip, IconButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const CreateTaskScreen = () => {
  const theme = useTheme();
  const [priority, setPriority] = React.useState("Normal");
  const [repeat, setRepeat] = React.useState("One time");

  return (
    <Card style={styles.container}>
      <Card.Content>
        <Text style={styles.title}>Create new task</Text>

        {/* Input de Título */}
        <View style={styles.inputContainer}>
          <Ionicons name="document-text-outline" size={20} color={theme.colors.primary} style={styles.icon} />
          <TextInput placeholder="Title" style={styles.textInput} />
        </View>

        {/* Input de Descrição */}
        <View style={styles.inputContainer}>
          <Ionicons name="chatbox-ellipses-outline" size={20} color={theme.colors.primary} style={styles.icon} />
          <TextInput placeholder="Description" style={styles.textInput} />
        </View>

        {/* Nível de Prioridade */}
        <Text style={styles.sectionTitle}>Select priority level of your task</Text>
        <RadioButton.Group onValueChange={(value) => setPriority(value)} value={priority}>
          <View style={styles.radioGroup}>
            <RadioButton.Item label="High" value="High" />
            <RadioButton.Item label="Medium" value="Medium" />
            <RadioButton.Item label="Normal" value="Normal" />
          </View>
        </RadioButton.Group>

        {/* Data e Hora */}
        <Text style={styles.sectionTitle}>Date and time</Text>
        <View style={styles.dateTimeContainer}>
          <TextInput placeholder="DD/MM/YYYY" style={styles.dateTimeInput} />
          <TextInput placeholder="HH:MM" style={styles.dateTimeInput} />
        </View>

        {/* Repetir */}
        <Text style={styles.sectionTitle}>Repeat</Text>
        <View style={styles.chipContainer}>
          <Chip
            selected={repeat === "One time"}
            onPress={() => setRepeat("One time")}
            style={styles.chip}
          >
            One time
          </Chip>
          <Chip
            selected={repeat === "Daily"}
            onPress={() => setRepeat("Daily")}
            style={styles.chip}
          >
            Daily
          </Chip>
          <Chip
            selected={repeat === "Custom"}
            onPress={() => setRepeat("Custom")}
            style={styles.chip}
          >
            Custom
          </Chip>
        </View>

        {/* Categoria */}
        <Text style={styles.sectionTitle}>Select the category</Text>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryChip}>
            <Ionicons name="person-circle-outline" size={24} color={theme.colors.primary} />
            <Text style={styles.categoryText}>Personal</Text>
          </View>
          <View style={styles.categoryChip}>
            <Ionicons name="briefcase-outline" size={24} color={theme.colors.primary} />
            <Text style={styles.categoryText}>Work</Text>
          </View>
          <View style={styles.categoryChip}>
            <Ionicons name="globe-outline" size={24} color={theme.colors.primary} />
            <Text style={styles.categoryText}>Other</Text>
          </View>
          <View style={styles.categoryChip}>
            <Ionicons name="add-circle-outline" size={24} color={theme.colors.primary} />
          </View>
        </View>

        {/* Botões de Cancelar e Criar */}
        <View style={styles.buttonContainer}>
          <Button mode="outlined" onPress={() => {}} style={styles.cancelButton}>
            Cancel
          </Button>
          <Button mode="contained" onPress={() => {}} style={styles.createButton}>
            Create
          </Button>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 12,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontFamily: "Nunito-Bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 16,
    padding: 8,
  },
  icon: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: "Nunito-Bold",
    marginVertical: 8,
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  dateTimeInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 8,
    flex: 1,
    marginRight: 8,
  },
  chipContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  chip: {
    flex: 1,
    marginHorizontal: 4,
    borderColor: "#ddd",
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  categoryChip: {
    alignItems: "center",
  },
  categoryText: {
    fontSize: 12,
    marginTop: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  cancelButton: {
    borderColor: "#ddd",
    width: "45%",
  },
  createButton: {
    backgroundColor: "#FFA500",
    width: "45%",
  },
});

export default CreateTaskScreen;
