import * as React                                                                  from "react";
import { FlatList, ActivityIndicator, Pressable, Text, SafeAreaView, View, Alert } from "react-native";
import { useNavigation }                                                           from "@react-navigation/native";

// @ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";

import api from "../../service/api";

const Task = () => {
	const [taskList, setTaskList] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	const navigation = useNavigation();

	const deleteTask = async (id: number) => {
		await api.delete(`/tasks/${ id }`);
		await loadTaskList();
	};

	const loadTaskList = async () => {
		const response = await api.get("/tasks");
		setTaskList(response.data.sort((a: { id: number }, b: { id: number }) => a.id - b.id));
	};

	const navigateToForm = async (
		id: number | undefined,
		title: string,
		description: string
	) => await navigation.navigate(
		"Form",
		{ id: id, title: title, description: description, refreshTaskList: loadTaskList }
	);

	React.useEffect(() => {
		// @refresh reset
		loadTaskList().then(() => setLoading(false));
	}, []);

	if (loading) {
		return (
			<SafeAreaView style={ { justifyContent: "center", flex: 1 } }>
				<ActivityIndicator color="#2C6CBC"/>
			</SafeAreaView>
		);
	}
	else {
		return (
			<SafeAreaView style={ { justifyContent: "center", flex: 1 } }>
				<Pressable onPress={ () => navigateToForm(undefined, "", "") }
				           style={ {
					           width:             180,
					           marginVertical:    16,
					           paddingHorizontal: 16,
					           paddingVertical:   8,
					           borderRadius:      8,
					           alignSelf:         "center",
					           backgroundColor:   "#5CB85C",
					           flexDirection:     "row",
					           justifyContent:    "space-between",
					           alignItems:        "center",
					           shadowOpacity:     .4,
					           shadowOffset:      { width: 4, height: 4 },
					           shadowRadius:      4,
					           shadowColor:       "#282828"
				           } }>
					<Ionicons name="ios-save" size={ 28 } color={ "#FFF" }/>
					<Text style={ {
						color:         "#FFF",
						fontWeight:    "900",
						letterSpacing: 2
					} }>&ensp;CADASTRAR</Text>
				</Pressable>


				<FlatList
					data={ taskList }
					keyExtractor={ item => item.id.toString() }
					renderItem={ ({ item }) =>
						<View style={ { flex: 1 } }>
							<View style={ {
								margin:          16,
								padding:         16,
								borderRadius:    16,
								backgroundColor: "#282828",
								shadowOpacity:   .8,
								shadowOffset:    { width: 4, height: 4 },
								shadowRadius:    8,
								shadowColor:     "#282828"
							} }>
								<View style={ { width: "100%" } }>
									<View style={ {
										flexDirection:  "row",
										justifyContent: "space-between",
										alignItems:     "center"
									} }>
										<Text style={ {
											color:         "#FFF",
											fontSize:      28,
											fontWeight:    "700",
											textTransform: "uppercase"
										} }>{ item.title }</Text>


										<View style={ {
											marginLeft:      8,
											padding:         2,
											borderRadius:    4,
											backgroundColor: "#5CB85C"
										} }>
											<Text style={ {
												color:      "#FFF",
												fontSize:   12,
												fontWeight: "900"
											} }>{ item.id }</Text>
										</View>
									</View>


									<Text style={ {
										marginVertical: 16,
										color:          "#FFF",
										textAlign:      "center"
									} }>{ item.description }</Text>
								</View>


								<Pressable onPress={ () => navigateToForm(item.id, item.title, item.description) }
								           style={ {
									           width:             160,
									           marginTop:         16,
									           paddingHorizontal: 16,
									           paddingVertical:   8,
									           borderRadius:      8,
									           alignSelf:         "center",
									           backgroundColor:   "#F0AD4E",
									           justifyContent:    "center",
									           alignItems:        "center"
								           } }>
									<Text style={ { color: "#FFF", fontWeight: "900", letterSpacing: 2 } }>EDITAR</Text>
								</Pressable>


								<Pressable onPress={ () => deleteTask(item.id) }
								           style={ {
									           width:             160,
									           marginTop:         16,
									           paddingHorizontal: 16,
									           paddingVertical:   8,
									           borderRadius:      8,
									           alignSelf:         "center",
									           backgroundColor:   "#D9534F",
									           justifyContent:    "center",
									           alignItems:        "center"
								           } }>
									<Text style={ { color: "#FFF", fontWeight: "900", letterSpacing: 2 } }>EXCLUIR</Text>
								</Pressable>
							</View>
						</View>
					}
				/>
			</SafeAreaView>
		);
	}
};

export default Task;
