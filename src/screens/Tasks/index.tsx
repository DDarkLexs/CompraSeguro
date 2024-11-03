import React, { useEffect, useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Card, Text, Checkbox, Divider } from 'react-native-paper';
import TaskCard from '../../components/Card';
import { Status } from '../../constants/enums';
import compraRepository from '../../database/Respository/compra';

const TaskScreen = () => {
    const [compras, setCompras] = useState<ICompras[]>([]);
    useEffect(() => {
        compraRepository.getAllCompras().then((compras) => {
            console.log(compras);
            setCompras(compras);
        });
    }, []);
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

    return (
        <ScrollView style={styles.container}>
            {groupedCompras.map((group, i) => {
                return (
                    <View key={i}>
                        <Text style={styles.sectionTitle}>{group.status === Status.PENDING ? 'Tarefas pendentes' : group.status === Status.COMPLETED ? 'Tarefas concluidas' : 'Tarefas canceladas'}</Text>
                        {group.compras.map((compra, j) => {
                            return (
                                <TaskCard
                                    key={j}
                                    title={compra.nome}
                                    description={"compra.descricao"}
                                    time={"compra.data"}
                                    priority={"compra.prioridade"}
                                    isChecked={compra.status === Status.COMPLETED}
                                />
                            );
                        })}
                    </View>
                );
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  categoryItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#555',
  },
  card: {
    marginBottom: 15,
    borderRadius: 10,
    paddingHorizontal: 10,
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

export default TaskScreen;

