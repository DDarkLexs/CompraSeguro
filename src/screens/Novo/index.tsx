import React from 'react';
import { View, StyleSheet, TextInput, Alert } from 'react-native';
import { Text, Card, Button, RadioButton, useTheme, Chip, IconButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import compra from '../../database/Respository/compra';
import { useAppDispatch } from '../../hooks/useRedux';
import { setCompras } from '../../store/features/compras';
const CreateTaskScreen = () => {
  const theme = useTheme();
  const disaptch = useAppDispatch();
  const [nome, setNome] = React.useState("");
  const [descricao, setDescricao] = React.useState("");
  const [loading, setLoding] = React.useState(false);
  const registar = async () => {
      try {
        setLoding(true);
        const data = await compra.createCompra({
          nome,
          descricao,
        })

        const values  = await compra.getAllCompras();
        disaptch(setCompras(values));
        Alert.alert("Sucesso", `Compra ${data.nome} registado com sucesso`);
      } catch (error) {
        console.error(error)
        
      } finally {
        setLoding(false);
      }
  } 
  return (
    <Card style={{...styles.container,backgroundColor: theme.colors.background}}>
      <Card.Content>
        <Text style={styles.title}>Criar nova compra</Text>

        {/* Input de Título */}
        <View style={styles.inputContainer}>
          <Ionicons  name="document-text-outline" size={20} color={theme.colors.primary} style={styles.icon} />
          <TextInput value={nome} editable={!loading} placeholder="Título" style={styles.textInput} onChangeText={setNome} />
        </View>

        {/* Input de Descrição */}
        <View style={styles.inputContainer}>
          <Ionicons name="chatbox-ellipses-outline" size={20} color={theme.colors.primary} style={styles.icon} />
          <TextInput value={descricao} editable={!loading} placeholder="Descrição" style={styles.textInput} onChangeText={setDescricao} />
        </View>

        {/* Nível de Prioridade */}
 {/*        <Text style={styles.sectionTitle}>Select priority level of your task</Text>
        <RadioButton.Group onValueChange={(value) => setPriority(value)} value={priority}>
          <View style={styles.radioGroup}>
            <RadioButton.Item label="High" value="High" />
            <RadioButton.Item label="Medium" value="Medium" />
            <RadioButton.Item label="Normal" value="Normal" />
          </View>
        </RadioButton.Group>
 */}
        {/* Data e Hora */}
        {/* <Text style={styles.sectionTitle}>Data e hora</Text>
        <View style={styles.dateTimeContainer}>
          <TextInput placeholder="DD/MM/YYYY" style={styles.dateTimeInput} />
          <TextInput placeholder="HH:MM" style={styles.dateTimeInput} />
        </View> */}

        {/* Repetir */}
       {/*  <Text style={styles.sectionTitle}>Repeat</Text>
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
        </View> */}

        {/* Categoria */}
     {/*    <Text style={styles.sectionTitle}>Select the category</Text>
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
 */}
        {/* Botões de Cancelar e Criar */}
        <View style={styles.buttonContainer}>
          <Button disabled={loading} mode="outlined" onPress={() => {
            setNome("");
            setDescricao("");
          }} style={styles.cancelButton}>
            Cancelar
          </Button>
          <Button disabled={loading} mode="contained" onPress={registar} style={styles.createButton}>
            Criar
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
    backgroundColor: "white",
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
