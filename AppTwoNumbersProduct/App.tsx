import React                                                                      from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";


const App = () => {
	const title = "Produto de Dois Números";

	const [input1BorderColor, setInput1BorderColor] = React.useState("#000");
	const [input2BorderColor, setInput2BorderColor] = React.useState("#000");
	const [num1, setNum1] = React.useState("");
	const [num2, setNum2] = React.useState("");
	const [product, setProduct] = React.useState(0);

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
			margin:          10,
			padding:         8,
			borderWidth:     1,
			borderRadius:    4,
			backgroundColor: "#FFF",
			fontSize:        18
		},
		button:     {
			marginVertical:    20,
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
		}
	});

	function isNumber(value: string): boolean {
		return value !== null && !isNaN(Number(value)) && !isNaN(parseFloat(value));
	}

	function twoNumbersProduct(): void {
		isNumber(num1) ? setInput1BorderColor("#4CAF50") : setInput1BorderColor("#F44336");
		isNumber(num2) ? setInput2BorderColor("#4CAF50") : setInput2BorderColor("#F44336");
		if (isNumber(num1) && isNumber(num2))
			setProduct(Number(num1) * Number(num2));
		else
			setProduct(0);
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
					width:          200,
					height:         200,
					margin:         40,
					alignSelf:      "center",
					justifyContent: "center",
					alignItems:     "center"
				} }>
					<TextInput
						onFocus={ () => setInput1BorderColor("#1976D2") }
						onBlur={ () => setInput1BorderColor("#000") }
						keyboardType={ "numeric" }
						placeholder={ "Digite o 1º número" }
						style={ { ...styles.input, borderColor: input1BorderColor } }
						value={ num1 }
						onChangeText={ value => {
							setProduct(0);
							setNum1(value.replace(",", "."));
						} }
					/>
					<TextInput
						onFocus={ () => setInput2BorderColor("#1976D2") }
						onBlur={ () => setInput2BorderColor("#000") }
						keyboardType={ "numeric" }
						placeholder={ "Digite o 2º número" }
						style={ { ...styles.input, borderColor: input2BorderColor } }
						value={ num2 }
						onChangeText={ value => {
							setProduct(0);
							setNum2(value.replace(",", "."));
						} }
					/>
					<Pressable onPress={ () => twoNumbersProduct() }
					           style={ { ...styles.boxShadow, ...styles.button, backgroundColor: "#1976D2" } }>
						<Text style={ styles.buttonText }>Calcular</Text>
					</Pressable>
					<Text>{ product === 0 ? "" : num1 + " x " + num2 + " = " + product }</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
