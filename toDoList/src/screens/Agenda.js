import React, { Component } from 'react'
import {Text, View, ImageBackground, FlatList, TouchableOpacity, Alert } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment'
import 'moment/locale/pt-br'
import todayImage from '../../assets/imgs/today.jpg'
import styles from './agendaStyles'
import Task from '../componentes/Task'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconIonicons from 'react-native-vector-icons/Ionicons';
import commonStyles from '../commonStyles'
import ActionButton from 'react-native-action-button'
import AddTask from './AddTask'
import {getStringDateFormat} from '../UtilString'
import {getMapToggleTask, ordenarTasks} from '../functions'

const nameAsyncStorageItem = 'toDoListMarks';
const initialState = {
    tasks: [],
    visibleTasks: [],
    showDoneTasks: true,
    showModalAddTask: false,
}
export default class Agenda extends Component {
    constructor(props){
        super(props)
        this.state = initialState
    }

    addTask = task => {
        let tasks = [...this.state.tasks]
        tasks.push({
            id: Math.random(), desc: task.desc, estimateAt: task.date, doneAt: null
        });
        this.setState({ tasks, showModalAddTask: false }, this.filterTasks)
    }

    filterTasks = () => {
        let visibleTasks = null
        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks].sort(ordenarTasks);
        } else {
            const pending = task => task.doneAt === null
            visibleTasks = this.state.tasks.filter(pending).sort(ordenarTasks);
        }

        this.setState({ visibleTasks });
        AsyncStorage.setItem(nameAsyncStorageItem, JSON.stringify(this.state));
    }

    toggleFilter = ()=> {
        //Passando a funcao como segundo parametro de this.setState(), 
        //a mesma sera acionada depois de atualizar o state
        this.setState({ 
            showDoneTasks: !this.state.showDoneTasks
        }, this.filterTasks )
    }

    //Esta funcao componentDidMount faz parte do ciclo de vida do APP no react-native.
    //Ela é acionada assim que o APP é montado, finalizado parte de renderizacao de componentes.
    componentDidMount = async () => {
        const data = await AsyncStorage.getItem(nameAsyncStorageItem)
        const tasks = JSON.parse(data) || initialState
        this.setState({ tasks }, this.filterTasks)        
    }

    toggleTask = id => {
        const tasks = this.state.tasks.map(task => getMapToggleTask(task, id))
        this.setState({ tasks }, this.filterTasks)
    }

    deleteTask = id => {
        const tasks = this.state.tasks.filter(task => task.id !== id)
        this.setState({ tasks }, this.filterTasks)
    }

    render() {
        return (
            <View style={styles.container}>
                <AddTask isVisible={this.state.showModalAddTask} onSave={this.addTask}
                    onCancel={() => {this.setState( {showModalAddTask: false })}} />
                <ImageBackground source={todayImage} style={styles.backgroud}>  
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <View style={styles.iconBar}>
                            <Text style={styles.subtitle}>
                                {getStringDateFormat(new Date(), 'ddd[,] D [de] MMMM [de] YYYY')}
                            </Text>
                            <Text style={styles.iconBarText}>
                                {this.state.showDoneTasks ? '' : 'Pendentes'} 
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.tasksContainer}>
                    <FlatList data={this.state.visibleTasks} 
                        keyExtractor={item => `${item.id}`} 
                        renderItem={ ({item}) => <Task {...item} onToggleTask={this.toggleTask} onDelete={this.deleteTask}></Task>}>
                    </FlatList>
                </View>
                <ActionButton buttonColor={commonStyles.colors.transparent} 
                        renderIcon={active => <Icon name={active ? 'plus' : 'ellipsis-v'} style={styles.actionButtonIcon}/>}>
                    <ActionButton.Item buttonColor='green' 
                        title="Nova tarefa" 
                        onPress={() => {this.setState( {showModalAddTask: true })}}>
                        <IconIonicons name="md-add" style={styles.actionButtonItemsIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' 
                        title={this.state.showDoneTasks ? 'Filtrar pendentes ' : 'Mostrar todas '}
                        onPress={this.toggleFilter}>
                        <Icon name={this.state.showDoneTasks ? 'filter' : 'list-ul'} style={styles.actionButtonItemsIcon} />
                    </ActionButton.Item>
                </ActionButton>
            </View>
        )
    }
}

