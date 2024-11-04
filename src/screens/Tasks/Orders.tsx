import React, { useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Card, Text, Checkbox, Divider, useTheme } from 'react-native-paper';
import TaskCard from '../../components/Card';
import { Routes, Status } from '../../constants/enums';
import compraRepository from '../../database/Respository/compra';
import { useAppSelector } from '../../hooks/useRedux';
import { convertToCurrency } from '../../utils/utils';
import { useAppNavigation } from '../../hooks/useNavigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const ComprasScreen: React.FC<
NativeStackScreenProps<StackScreen, Routes.ORDER>
> = ({ navigation, route, }): React.JSX.Element => {
    const [compras, setCompras] = useState<ICompras[]>([]);
    const $compra = useAppSelector(state => state.compras.compras);
    // const navigation = useAppNavigation();
    useEffect(() => {
        compraRepository.getAllCompras().then((compras) => {
            setCompras(compras);
        });
    }, [$compra]);

    const get = async () => {
      compraRepository.getAllCompras().then((compras) => {
        setCompras(compras);
    });
    };

    useEffect(()=>{
      const unsubscribe = navigation.addListener('focus', get);
      return unsubscribe; // Limpa o listener ao desmontar o componente
    },[navigation, $compra])


    const groupByStatus = (compras: ICompras[]) => {
        const pendentes = compras.filter((compra) => compra.status === Status.PENDING);
        const concluidas = compras.filter((compra) => compra.status === Status.COMPLETED);
        const canceladas = compras.filter((compra) => compra.status === Status.CANCELED);

        return [
            {status: Status.PENDING, compras: pendentes},
            {status: Status.COMPLETED, compras: concluidas},
            {status: Status.CANCELED, compras: canceladas},
        ];
    };

    const groupedCompras = groupByStatus(compras);
    const theme = useTheme();
    return (
        <ScrollView style={{...styles.container, backgroundColor: theme.colors.background}}>
            <Card style={{...styles.card, backgroundColor:theme.colors.background}}>
                {groupedCompras.map((group, i) => {
                    return (
                        <View key={i}>
                            <Text style={styles.sectionTitle}>{group.status === Status.PENDING ? 'Tarefas pendentes' : group.status === Status.COMPLETED ? 'Tarefas concluidas' : 'Tarefas canceladas'}</Text>
                            {group.compras.map((compra, i) => {
                                return (
                                    <TaskCard
                                        key={i}
                                        title={compra.nome}
                                        total={convertToCurrency(compra.total)}
                                        time={compra.created.toLocaleString()}
                                        onPress={() => navigation.navigate(Routes.PRODUCTS, compra)}
                                        // priority={"compra.prioridade"}
                                        status={compra.status}
                                        // isChecked={compra.status === Status.COMPLETED}
                                    />
                                );
                            })}
                        </View>
                    );
                })}
            </Card>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {

    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.1,
    elevation: 1,
    borderRadius: 10,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#555',
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  taskDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  taskTime: {
    fontSize: 13,
    color: '#888',
  },
  checkboxContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
export default ComprasScreen;

