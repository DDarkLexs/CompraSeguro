import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import { Button, Card, RadioButton, Text, useTheme } from "react-native-paper";
import { Routes } from "../../constants/enums";
import repo from "../../database/Respository/produtos";

const CreateProductScreen: React.FC<
  NativeStackScreenProps<StackScreen, Routes.NEW_PRODUCT>
> = ({ navigation, route }): React.JSX.Element => {
  const theme = useTheme();
  const [produto, setProduto] = React.useState<IprodutoDto>({
    nome: "",
    preco: 0,
    qtd: 0,
    comprado: false,
  });
  const [loading, setLoding] = React.useState(false);

  const registar = async () => {
    try {
      setLoding(true);
      await repo.createProduto(produto, route.params.id_compra);

      Alert.alert("Sucesso", `Produto ${produto.nome} registado com sucesso`);
    } catch (error) {
      console.error(error);
    } finally {
      setLoding(false);
    }
  };
  return (
    <Card
      style={{ ...styles.container, backgroundColor: theme.colors.background }}
    >
      <Card.Content>
        <Text style={styles.title}>Criar novo produto</Text>

        {/* Input de Título */}
        <View style={styles.inputContainer}>
          <Ionicons
            name="document-text-outline"
            size={20}
            color={theme.colors.primary}
            style={styles.icon}
          />
          <TextInput
            value={produto.nome}
            editable={!loading}
            placeholder="Título"
            style={styles.textInput}
            onChangeText={(text) => setProduto({ ...produto, nome: text })}
          />
        </View>

        {/* Input de Descrição */}
        {/* Preço */}
        <View style={styles.inputContainer}>
          <Ionicons
            name="cash-outline"
            size={20}
            color={theme.colors.primary}
            style={styles.icon}
          />
          <TextInput
            value={produto.preco.toString()}
            editable={!loading}
            placeholder="Preco"
            style={styles.textInput}
            onChangeText={(text) =>
              setProduto({ ...produto, preco: Number(text) })
            }
          />
        </View>

        {/* Quantidade */}
        <View style={styles.inputContainer}>
          <Ionicons
            name="basket-outline"
            size={20}
            color={theme.colors.primary}
            style={styles.icon}
          />
          <TextInput
            value={produto.qtd.toString()}
            editable={!loading}
            placeholder="Quantidade"
            style={styles.textInput}
            onChangeText={(text) =>
              setProduto({ ...produto, qtd: Number(text) })
            }
          />
        </View>

        {/* Nivel de Prioridade */}
        <Text style={styles.sectionTitle}>Este item foi comprado</Text>
        <RadioButton.Group
          onValueChange={(value) =>
            setProduto({ ...produto, comprado: value === "true" })
          }
          value={produto.comprado ? "true" : "false"}
        >
          <View style={styles.radioGroup}>
            <RadioButton.Item label="Sim" value="true" />
            <RadioButton.Item label="Não" value="false" />
          </View>
        </RadioButton.Group>

        {/* Botões de Cancelar e Criar */}
        <View style={styles.buttonContainer}>
          <Button
            disabled={loading}
            mode="outlined"
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.cancelButton}
          >
            Cancelar
          </Button>
          <Button
            disabled={loading}
            mode="contained"
            onPress={registar}
            style={styles.createButton}
          >
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

export default CreateProductScreen;
