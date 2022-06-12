import * as React                                                   from "react";
import { View, Text, TextInput, FlatList, SafeAreaView, Pressable } from "react-native";

// @ts-ignore
import { openDatabase } from "react-native-sqlite-storage";
// @ts-ignore
import Ionicons         from "react-native-vector-icons/Ionicons";

const db = openDatabase({
	name: "todo_list"
});

interface Task {
	id: number;
	nm_task: string;
}

const App = () => {
	const [taskInput, setTaskInput] = React.useState<string>("");
	const [taskList, setTaskList] = React.useState<Task[]>([]);

	const createTable = () => {
		db.transaction((t: {
			executeSql: (
				arg0: string,
				arg1: never[],
				arg2: (sqlT: any, r: any) => void,
				arg3: (e: any) => void
			) => void;
		}) => {
			t.executeSql(
				`create table if not exists task_list
         (
             id      integer primary key autoincrement,
             nm_task varchar(28)
         )`,
				[],
				(sqlT, r) => console.log("Tabela criada com sucesso!"),
				e => console.log(`Falha ao criar tabela: ${ e.message }`)
			);
		});
	};

	const createTask = () => {
		if (!taskInput) {
			alert("Digite uma tarefa");
			return false;
		}
		db.transaction((t: {
			executeSql: (
				arg0: string,
				arg1: string[],
				arg2: (sqlT: any, r: any) => void,
				arg3: (e: any) => void
			) => void;
		}) => {
			t.executeSql(
				`insert into task_list (nm_task)
         values (?)`,
				[taskInput],
				(sqlT, r) => {
					console.log(`Tarefa ${ taskInput } adicionada com sucesso!`);
					readTaskList();
					setTaskInput("");
				},
				e => console.log(`Falha ao inserir tarefa: ${ e.message }`)
			);
		});
	};

	const readTaskList = () => {
		db.transaction((t: {
			executeSql: (
				arg0: string,
				arg1: never[],
				arg2: (sqlT: any, r: any) => void,
				arg3: (e: any) => void
			) => void;
		}) => {
			t.executeSql(
				`select *
         from task_list`,
				[],
				(sqlT, r) => {
					const len = r.rows.length;
					console.log(`${ len <= 0 ?
					                "Nenhuma tarefa cadastrada!" :
					                len === 1 ? `${ len } tarefa cadastrada!` :
					                `${ len } tarefas cadastradas!` }`);
					if (len > 0) {
						const taskList: any = [];
						r.rows.raw().forEach((row: { id: number, nm_task: string }) => taskList.push(row));
						setTaskList(taskList);
					}
					else
						setTaskList([]);
				},
				e => console.log(`Falha de leitura: ${ e.message }`)
			);
		});
	};

	const deleteTask = (task: Task) => {
		db.transaction((t: {
			executeSql: (
				arg0: string,
				arg1: any[],
				arg2: (sqlT: any, r: any) => void,
				arg3: (e: any) => void
			) => void;
		}) => {
			t.executeSql(
				`delete
         from task_List
         where id = (?)`,
				[task.id],
				(sqlT, r) => {
					console.log(`Tarefa ${ task.nm_task } removida com sucesso!`);
					readTaskList();
				},
				e => console.log(`Falha ao remover tarefa: ${ e.message }`)
			);
		});
	};

	const renderTask = ({ item: task }: any) => {
		return (
			<View style={ {
				padding:           16,
				borderBottomWidth: 1,
				borderColor:       "#CCC",
				flexDirection:     "row",
				justifyContent:    "space-between",
				alignItems:        "center"
			} }>
				<View style={ { flexDirection: "row" } }>
					<Text>{ task.id }&emsp;</Text>
					<Text>{ task.nm_task }</Text>
				</View>
				<View>
					<Pressable onPress={ () => deleteTask(task) }>
						<Ionicons name="ios-trash" size={ 20 } color={ "#F44336" }/>
					</Pressable>
				</View>
			</View>
		);
	};

	React.useEffect(() => {
		createTable();
		readTaskList();
	}, []);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={ { backgroundColor: "#FFFEE0", flex: 1 } }>


				<View style={ {
					paddingHorizontal: 16,
					paddingVertical:   8,
					backgroundColor:   "#1B7CED",
					alignItems:        "center",
					shadowOpacity:     .4,
					shadowOffset:      { width: 0, height: 4 },
					shadowRadius:      4,
					shadowColor:       "#2C6CBC"
				} }>
					<Text style={ {
						color:         "#FFF",
						fontSize:      28,
						fontWeight:    "600",
						letterSpacing: 2
					} }>
						Lista de Tarefas
					</Text>
				</View>


				<View style={ {
					margin:        16,
					flexDirection: "row",
					shadowOpacity: .4,
					shadowOffset:  { width: 0, height: 4 },
					shadowRadius:  4,
					shadowColor:   "#2C6CBC"
				} }>
					<TextInput
						placeholder="Informe uma tarefa"
						placeholderTextColor={"#CCC"}
						value={ taskInput }
						onChangeText={ setTaskInput }
						style={ {
							width:       "85%",
							padding:     8,
							borderWidth: 1,
							borderColor: "#CCC",
							fontSize:    20
						} }
					/>
					<Pressable onPress={ createTask }
					           style={ {
						           width:             "15%",
						           paddingHorizontal: 16,
						           paddingVertical:   8,
						           backgroundColor:   "#1B7CED"
					           } }>
						<View style={ { justifyContent: "center", alignItems: "center" } }>
							<Ionicons name="ios-save" size={ 28 } color={ "#FFF" }/>
						</View>
					</Pressable>
				</View>


				<View style={ { flex: 1 } }>
					<FlatList
						data={ taskList }
						renderItem={ renderTask }
						keyExtractor={ (t: { id: any; }) => t.id }
						contentContainerStyle={ { marginHorizontal: 16 } }
						ListFooterComponent={ <View style={ { height: 16 } }/> }
					/>
				</View>


			</View>
		</SafeAreaView>
	);
};

export default App;
