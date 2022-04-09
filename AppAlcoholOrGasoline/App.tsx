import React                                                                             from "react";
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";


const App = () => {
	const title = "Álcool ou Gasolina?";

	const [input1BorderColor, setInput1BorderColor] = React.useState("#000");
	const [input2BorderColor, setInput2BorderColor] = React.useState("#000");
	const [alcohol, setAlcohol] = React.useState("");
	const [gasoline, setGasoline] = React.useState("");
	const [difference, setDifference] = React.useState(0);

	const styles = StyleSheet.create({
		boxShadow:  {
			shadowOpacity: .5,
			shadowOffset:  { width: 1, height: 1 },
			shadowRadius:  2,
			shadowColor:   "#000"
		},
		input:      {
			width:           "100%",
			height:          40,
			marginBottom:    20,
			padding:         8,
			borderWidth:     1,
			borderRadius:    4,
			backgroundColor: "#FFF",
			fontSize:        18
		},
		button:     {
			marginBottom:      20,
			paddingHorizontal: 16,
			paddingVertical:   8,
			borderRadius:      4,
			backgroundColor:   "#1976D2"
		},
		buttonText: {
			color:         "#FFF",
			fontSize:      18,
			fontWeight:    "700",
			textTransform: "uppercase",
			textAlign:     "center",
			letterSpacing: 4
		},
		result:     {
			marginBottom:        20,
			fontSize:            28,
			textDecorationLine:  "underline",
			textDecorationStyle: "double"
		}
	});

	function isNumber(value: string): boolean {
		return value !== null && !isNaN(Number(value)) && !isNaN(parseFloat(value)) && Number(value) > 0;
	}

	function alcoholOrGasoline(): void {
		isNumber(alcohol) ? setInput1BorderColor("#4CAF50") : setInput1BorderColor("#F44336");
		isNumber(gasoline) ? setInput2BorderColor("#4CAF50") : setInput2BorderColor("#F44336");
		if (isNumber(alcohol) && isNumber(gasoline))
			setDifference(Number(alcohol) / Number(gasoline));
		else
			setDifference(0);
	}

	return (
		<SafeAreaView style={ { backgroundColor: "#E9E9E9", flex: 1 } }>
			<ScrollView style={ { flexDirection: "column" } }>
				<Text style={ {
					...styles.boxShadow,
					width:           "100%",
					paddingVertical: 20,
					backgroundColor: "#1976D2",
					color:           "#FFF",
					fontSize:        28,
					fontWeight:      "700",
					textAlign:       "center"
				} }>{ title }</Text>
				<View style={ {
					...styles.boxShadow,
					width:     200,
					height:    200,
					margin:    20,
					alignSelf: "center"
				} }>
					<Image
						source={ require("./assets/img/alcohol-or-gasoline.jpeg") }
						style={ { width: "100%", height: "100%", borderRadius: 32, resizeMode: "stretch" } }
					/>
				</View>
				<View style={ {
					...styles.boxShadow,
					width:          200,
					minHeight:      200,
					marginBottom:   20,
					alignSelf:      "center",
					justifyContent: "center",
					alignItems:     "center"
				} }>
					<Text style={ { marginBottom: 5, marginLeft: 10, alignSelf: "flex-start" } }>Álcool R$</Text>
					<TextInput
						onFocus={ () => setInput1BorderColor("#1976D2") }
						onBlur={ () => setInput1BorderColor("#000") }
						keyboardType={ "numeric" }
						placeholder={ "Valor do Álcool" }
						style={ { ...styles.input, borderColor: input1BorderColor } }
						value={ alcohol }
						onChangeText={ value => {
							setDifference(0);
							setAlcohol(value.replace(",", "."));
						} }
					/>
					<Text style={ { marginBottom: 5, marginLeft: 10, alignSelf: "flex-start" } }>Gasolina R$</Text>
					<TextInput
						onFocus={ () => setInput2BorderColor("#1976D2") }
						onBlur={ () => setInput2BorderColor("#000") }
						keyboardType={ "numeric" }
						placeholder={ "Valor do Gasolina" }
						style={ { ...styles.input, borderColor: input2BorderColor } }
						value={ gasoline }
						onChangeText={ value => {
							setDifference(0);
							setGasoline(value.replace(",", "."));
						} }
					/>
					<Pressable onPress={ () => alcoholOrGasoline() }
					           style={ { ...styles.boxShadow, ...styles.button, backgroundColor: "#1976D2" } }>
						<Text style={ styles.buttonText }>Calcular</Text>
					</Pressable>
					<Text style={ styles.result }>{ difference === 0 ? "" : "Resultado" }</Text>
					<Text style={ { marginBottom: 20, fontSize: 18, textAlign: "center" } }>{ difference === 0 ?
					                                                                          "" :
					                                                                          "R$ " + alcohol + " ÷ R$ " +
					                                                                          gasoline + " =\nR$ " +
					                                                                          difference }</Text>
					<Text style={ { fontSize: 18, textAlign: "center" } }>{ difference === 0 ?
					                                                        "" :
					                                                        difference < .7 ?
					                                                        "Álcool é a melhor opção!" :
					                                                        difference > .7 ?
					                                                        "Gasolina é a melhor opção!" :
					                                                        "Ambos são a melhor opção!" }</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
