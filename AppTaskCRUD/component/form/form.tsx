import * as React                                                     from "react";
import { Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { useNavigation }                                              from "@react-navigation/native";

import api from "../../service/api";

const Form = route => {
	const [id, setId] = React.useState(route.params?.id);
	const [newTitle, setNewTitle] = React.useState(route.params?.title);
	const [newDescription, setNewDescription] = React.useState(route.params?.description);

	const navigation = useNavigation();

	const salvarTarefa = async () => {

		const body = JSON.stringify({ title: newTitle, description: newDescription });

		if (id !== undefined) {
			const response = await api.put(`/tasks/${ id }`, body, { headers: { "Content-Type": "application/json" } });
			await route.params?.atualizarLista();
		}
		else {
			const response = await api.post("/tasks", body, { headers: { "Content-Type": "application/json" } });
			await route.params?.atualizarLista();
		}

		navigation.goBack();
	};
	return (
		<SafeAreaView style={ { flex: 1 } }>
			<View style={ { backgroundColor: "#F9F9F9", flex: 1 } }>
				<ScrollView>
					<View style={ { margin: 16 } }>
						<TextInput
							placeholder="Informe o título da tarefa"
							placeholderTextColor={ "#CCC" }
							value={ undefined }
							onChangeText={ undefined }
							style={ {
								marginBottom: 8,
								padding:      8,
								borderWidth:  1,
								borderColor:  "#CCC",
								fontSize:     20
							} }
						/>


						<TextInput
							placeholder="Informe a descrição da tarefa"
							placeholderTextColor={ "#CCC" }
							value={ undefined }
							onChangeText={ undefined }
							style={ {
								marginBottom: 16,
								padding:      8,
								borderWidth:  1,
								borderColor:  "#CCC",
								fontSize:     20
							} }
						/>


						<Pressable onPress={ undefined }
						           style={ {
							           paddingHorizontal: 16,
							           paddingVertical:   8,
							           backgroundColor:   "#2C6CBC",
							           justifyContent:    "center",
							           alignItems:        "center",
							           shadowOpacity:     .4,
							           shadowOffset:      { width: 0, height: 4 },
							           shadowRadius:      4,
							           shadowColor:       "#282828"
						           } }>
							<Text style={ { color: "#FFF", fontWeight: "700", letterSpacing: 2 } }>SALVAR</Text>
						</Pressable>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default Form;
