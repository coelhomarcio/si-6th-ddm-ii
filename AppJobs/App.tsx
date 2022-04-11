import React                                    from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { styles }                               from "./App.styles";


const App = () => {
	const title = "Vagas de Emprego";
	const jobList = [
		{
			job:         "Desenvolvedor Backend",
			description: "Conhecimento em JAVA e Postgres.",
			salary:      3600
		},
		{
			job:         "Engenheiro de Dados",
			description: "Conhecimento em Estrutuda de Dados",
			salary:      4500
		},
		{
			job:         "Desenvolvedor Frontend",
			description: "Conhecimento em HTML, CSS e JavaScript",
			salary:      3150
		}
	];

	const JobItems = jobList.map((value, key) => {
		return [
			<View key={ key }>
				<View style={ styles.productDetails }>
					<Text style={ { ...styles.productDetailsTitle, ...styles.productDetailsText } }>{ value.job }</Text>
					<Text style={ { ...styles.productDetailsBody, ...styles.productDetailsText } }>{ value.description }</Text>
					<Text style={ { ...styles.productDetailsBody, ...styles.productDetailsText } }>R$ {
						value.salary.toFixed(2).replace(".", ",")
					}</Text>
				</View>
			</View>
		];
	});

	return (
		<SafeAreaView style={ styles.body }>
			<ScrollView showsVerticalScrollIndicator={ false }>
				<View style={ styles.header }>
					<Text style={ styles.h1 }>{ title }</Text>
				</View>

				<View style={ styles.main }>
					<ScrollView showsHorizontalScrollIndicator={ false }>
						{ JobItems }
					</ScrollView>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
