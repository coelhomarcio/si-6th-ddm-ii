import * as React                                   from "react";
import { View, Text, TextInput, Pressable, LogBox } from "react-native";
import { useNavigation }                            from "@react-navigation/native";

import api from "../../service/api";

LogBox.ignoreLogs([
	"Non-serializable values were found in the navigation state"
]);

const Form = ({ route }: any) => {
	const [id] = React.useState(route.params?.id);
	const [title, setTitle] = React.useState(route.params?.title);
	const [description, setDescription] = React.useState(route.params?.description);
	const navigation = useNavigation();

	const createUpdateTaskList = async () => {
		if (title === "" || description === "") {
			alert("Preencha todos os campos!");
			return false;
		}
		const body = JSON.stringify({ title: title, description: description });
		if (id !== undefined)
			await api.put(`/tasks/${ id }`, body, { headers: { "Content-Type": "application/json" } });
		else
			await api.post("/tasks", body, { headers: { "Content-Type": "application/json" } });
		await route.params?.refreshTaskList();
		await navigation.goBack();
	};

	return (
		<View style={ { margin: 16, flex: 1 } }>
			<TextInput
				placeholder="Informe o título da tarefa"
				placeholderTextColor={ "#CCC" }
				defaultValue={ route.params.title }
				onChangeText={ (value) => setTitle(value) }
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
				defaultValue={ route.params.description }
				onChangeText={ (value) => setDescription(value) }
				style={ {
					marginBottom: 16,
					padding:      8,
					borderWidth:  1,
					borderColor:  "#CCC",
					fontSize:     20
				} }
			/>


			<Pressable onPress={ createUpdateTaskList }
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
	);
};

export default Form;
