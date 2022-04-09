import React                                                                             from "react";
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";


const App = () => {
	const title = "Cálculo do IMC";

	const [input1BorderColor, setInput1BorderColor] = React.useState("#000");
	const [input2BorderColor, setInput2BorderColor] = React.useState("#000");
	const [height, setHeight] = React.useState("");
	const [weight, setWeight] = React.useState("");
	const [BMI, setBMI] = React.useState(0);

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
			textAlign:           "center",
			textDecorationLine:  "underline",
			textDecorationStyle: "solid"
		}
	});

	function isNumber(value: string): boolean {
		return value !== null && !isNaN(Number(value)) && !isNaN(parseFloat(value)) && Number(value) > 0;
	}

	function twoNumbersProduct(): void {
		isNumber(height) ? setInput1BorderColor("#4CAF50") : setInput1BorderColor("#F44336");
		isNumber(weight) ? setInput2BorderColor("#4CAF50") : setInput2BorderColor("#F44336");
		if (isNumber(height) && isNumber(weight))
			setBMI(Number(weight) / Number(height) ** 2);
		else
			setBMI(0);
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
						source={ require("./assets/img/bmi.jpeg") }
						style={ { width: "100%", height: "100%", borderRadius: 100, resizeMode: "center" } }
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
					<Text style={ { marginBottom: 5, marginLeft: 10, alignSelf: "flex-start" } }>Altura</Text>
					<TextInput
						onFocus={ () => setInput1BorderColor("#1976D2") }
						onBlur={ () => setInput1BorderColor("#000") }
						keyboardType={ "numeric" }
						placeholder={ "Altura (m)" }
						style={ { ...styles.input, borderColor: input1BorderColor } }
						value={ height }
						onChangeText={ value => {
							setBMI(0);
							setHeight(value.replace(",", "."));
						} }
					/>
					<Text style={ { marginBottom: 5, marginLeft: 10, alignSelf: "flex-start" } }>Peso</Text>
					<TextInput
						onFocus={ () => setInput2BorderColor("#1976D2") }
						onBlur={ () => setInput2BorderColor("#000") }
						keyboardType={ "numeric" }
						placeholder={ "Peso (Kg)" }
						style={ { ...styles.input, borderColor: input2BorderColor } }
						value={ weight }
						onChangeText={ value => {
							setBMI(0);
							setWeight(value.replace(",", "."));
						} }
					/>
					<Pressable onPress={ () => twoNumbersProduct() }
					           style={ { ...styles.boxShadow, ...styles.button, backgroundColor: "#1976D2" } }>
						<Text style={ styles.buttonText }>Calcular</Text>
					</Pressable>
					<View style={ { display: BMI === 0 ? "none" : "flex", flexDirection: "column", justifyContent: "center" } }>
						<Text style={ styles.result }>Resultado</Text>
						<Text style={ { marginBottom: 20, fontSize: 18, textAlign: "center" } }>Índice de massa corporal</Text>
						<Text style={ {
							marginBottom: 20,
							color:        "#1976D2",
							fontSize:     28,
							fontWeight:   "700",
							textAlign:    "center"
						} }>{ BMI.toFixed(2) }</Text>
						<Text style={ {
							marginBottom: 20,
							fontSize:     18,
							fontWeight:   "700",
							textAlign:    "center"
						} }>{ BMI === 0 ?
						      "" :
						      BMI < 18.5 ?
						      "Abaixo do peso" :
						      BMI >= 18.5 && BMI < 25 ?
						      "Peso normal" :
						      BMI >= 25 && BMI < 30 ?
						      "Sobrepeso" :
						      BMI >= 30 && BMI < 35 ?
						      "Obesidade Grau I" :
						      BMI >= 35 && BMI < 40 ?
						      "Obesidade Grau II" :
						      "Obesidade Grau III ou Mórbida" }</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
