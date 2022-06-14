import * as React                                   from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation }                            from "@react-navigation/native";

import api from "../../service/api";

function Card({ data, funcCarregarTarefas }) {
	const [id, setId] = React.useState(data?.id);
	const [title, setTitle] = React.useState(data?.title);
	const [description, setDescription] = React.useState(data?.description);

	const excluirTarefa = async () => {
		const response = await api.delete(`/tasks/${ id }`);
		await funcCarregarTarefas();
	};

	const navigation = useNavigation();

	async function irFormulario() {
		navigation.navigate(
			"Form",
			{ id: id, title: title, description: description, atualizarLista: funcCarregarTarefas }
		);
	}


	return (
		<View>
			<View style={ styles.card }>
				<Text style={ styles.titulo }>{ title }</Text>


				<Text style={ styles.descricao }>{ description }</Text>


				<TouchableOpacity style={ styles.buttonEditar } onPress={ irFormulario }>
					<Text>Editar</Text>
				</TouchableOpacity>


				<TouchableOpacity style={ styles.buttonExcluir } onPress={ excluirTarefa }>
					<Text>Excluir</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card:          {
		shadowColor:     "#000",
		backgroundColor: "#FFF",
		shadowOffset:    { width: 0, height: 1 },
		shadowOpacity:   0.8,
		margin:          15,
		shadowRadius:    5,
		borderRadius:    5,
		elevation:       3
	},
	titulo:        {
		fontSize: 18,
		padding:  15
	},
	descricao:     {
		fontSize: 10,
		padding:  15
	},
	buttonEditar:  {
		borderRadius:    5,
		marginVertical:  20,
		alignSelf:       "flex-start",
		backgroundColor: "yellow",
		marginVertical:  0,
		marginLeft:      10
	},
	buttonExcluir: {
		borderRadius:    5,
		marginVertical:  20,
		alignSelf:       "flex-start",
		backgroundColor: "gray",
		marginVertical:  0,
		marginLeft:      10,
		backgroundColor: "tomato",
		marginTop:       10,
		marginBottom:    10
	}
});

export default Card;

