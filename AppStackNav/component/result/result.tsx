import React                                               from "react";
import { View, Text, SafeAreaView, ScrollView, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Ionicons          from "react-native-vector-icons/Ionicons";

import { styles } from "../../App.styles";

const Result = ({ route }) => {
	const navigation = useNavigation();

	return (
		<SafeAreaView>
			<ScrollView>
				<View style={ styles.main }>
					<View>
						<View style={ styles.result }>
							<Text style={ { ...styles.resultTitle, ...styles.textCenter } }>Dados enviados</Text>
							<Text style={ styles.resultText }>Nome: { route.params?.name }</Text>
							<View>
								<Text style={ styles.resultText }>Idade: { route.params?.age }</Text>
								<Text style={ styles.resultText }>Gênero: { route.params?.gender }</Text>
							</View>
							<Text style={ styles.resultText }>Escolaridade: { route.params?.schooling }</Text>
							<Text style={ styles.resultText }>Nacionalidade: { route.params?.isBrazilian ?
							                                                   "Brasileira" :
							                                                   "Estrangeira" }</Text>
							<Text style={ styles.resultText }>Limite da conta: R$ { Math.floor(route.params?.accountLimit * 1000)
								.toFixed(2)
								.replace(".", ",") }</Text>
						</View>
						<Pressable onPress={ () => navigation.goBack() } style={ { ...styles.pressable, ...styles.boxShadow } }>
							<Text style={ styles.textPressable }><Ionicons name="ios-arrow-back" size={ 18 }/>Voltar</Text>
						</Pressable>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Result;
