import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useEffect } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Text, List, Checkbox, FAB, useTheme, Button, IconButton, Card } from 'react-native-paper';
import { Routes } from '../../constants/enums';
import { Ionicons } from '@expo/vector-icons';
import produtos from '../../database/Respository/produtos';
import compraRepo from '../../database/Respository/compra';
import { convertToCurrency } from '../../utils/utils';

const ProductsScreen: React.FC<
NativeStackScreenProps<StackScreen, Routes.PRODUCTS>
> = ({ navigation, route }): React.JSX.Element => {
  const { id_compra } = route.params;
  const theme = useTheme();
  const [loding, setLoding] = React.useState(false);
  const [artigo, setArtigo] = React.useState<IProdutos[]>([]);
  const [compra, setCompra] = React.useState<ICompras>(route.params);
  const get = async ( ) => {
    try {
      const data2 = await compraRepo.getCompraById(compra.id_compra);
      // console.log(data2)
      setCompra(data2);
      const data = await produtos.getAllProdutosByCompra(id_compra)
      setArtigo(data)
    } catch (error) {
      console.warn(error)
    }
  }


  useEffect(()=>{
    get()
  },[id_compra]);

  const deleteItem = async (id: number) => {
    try {
      Alert.alert(
        'Excluir produto',
        'Tem certeza que deseja excluir o produto?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Excluir',
            onPress: async () => {
              await produtos.deleteProduto(id);
              get();
            },
          },
        ],
      )
      // await produtos.deleteProduto(id);
      // get();
    } catch (error) {
      console.warn(error);
    }
  };
  const handleToggle = async (produto: IProdutos) => {
      try {
        await produtos.updateProduto(produto.id_produto, produto);

        await get()
      } catch (error) {
        console.error(error)
      }
  };



  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', get);
    return unsubscribe; // Limpa o listener ao desmontar o componente
  }, [navigation, id_compra]);

  return (
    <>
    <Card style={styles.container} elevation={1}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name={"menu-outline"} size={25}  color={"gray"} style={{}} />
        </TouchableOpacity>
        
        <Text style={styles.header}>{convertToCurrency(compra.total)}</Text>

        <TouchableOpacity onPress={() => navigation.navigate(Routes.NEW_PRODUCT, { id_compra })}>
          <Ionicons name={"add-circle-outline"} size={25}  color={"gray"} style={{}} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {artigo.map((item, i) => (
          <View key={i} style={styles.reminderItem}>
            <Checkbox
              status={item.comprado ? 'checked' : 'unchecked'}
              onPress={() => handleToggle({...item, comprado: !item.comprado})}
              color={theme.colors.primary}
              />
            <View style={styles.reminderTextContainer}>
              <Text style={styles.reminderText}>{item.nome}</Text>
              <Text style={styles.priorityText}>
                 {convertToCurrency(item.preco)}
              </Text>
            
                <Text style={{...styles.dateText, color:theme.colors.secondary}}>
                  {item.qtd} = {convertToCurrency(item.total)}
                </Text>
          
            </View>
            <View style={{flexDirection:'row', alignItems:'flex-end', justifyContent:'flex-end', marginLeft:'auto'}}>
              <TouchableOpacity onPress={() => deleteItem(item.id_produto)}>
                <Ionicons name={"trash-outline"} size={25}  color={"gray"} style={{marginRight:8}} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate(Routes.UPDATE_PRODUCT, item)}>
                <Ionicons name={"create-outline"} size={25}  color={"gray"} style={{marginRight:8}} />
              </TouchableOpacity>
              {/* <Checkbox
                status={item.comprado ? 'checked' : 'unchecked'}
                // onPress={() => handleToggle(reminder.id)}
                color={theme.colors.primary}
                /> */}
            </View>
          </View>
        ))}
      </ScrollView>
    </Card>
        </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    margin: 20,
    height:"auto",
    shadowOpacity:0.01
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  fab: {
    // position: 'absolute',
    // left: 16,
    // top: 16,
    // zIndex: 1,
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
    color: 'green',
    fontSize: 12,
    marginTop: 4,
  },
  dateText: {
    fontSize: 12,
    marginTop: 4,
  },
});
export default ProductsScreen;



