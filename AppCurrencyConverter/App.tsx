import { Picker }                                                               from "@react-native-picker/picker";
import React                                                                    from "react";
import { Keyboard, Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { styles }                                                               from "./App.styles";


const App = () => {
	const title = "Conversor de Moedas";
	const subTitle = "Dólar, Real e Euro";
	const dollar = 1;
	const real = 1 / 4.71;
	const euro = 1 / .92;
	const currencyList = ["", "Dólar", "Real", "Euro"];

	const [inputBorderColor, setInputBorderColor] = React.useState("#000");
	const [amount, setAmount] = React.useState("");
	const [firstCurrency, setFirstCurrency] = React.useState("");
	const [secondCurrency, setSecondCurrency] = React.useState("");
	const [result, setResult] = React.useState(0);

	const currencyItems = currencyList.map((value, key) =>
		<Picker.Item key={ key } value={ value } label={ value }/>
	);

	function isNumber(value: string): boolean {
		return value !== null && !isNaN(Number(value)) && !isNaN(parseFloat(value)) && Number(value) > 0;
	}

	function convert(): void {
		Keyboard.dismiss();
		isNumber(amount) ? setInputBorderColor("#4CAF50") : setInputBorderColor("#F44336");
		if (isNumber(amount)) {
			if (firstCurrency === "Dólar" && secondCurrency === "Dólar")
				setResult((Number(amount) * dollar) / dollar);
			else if (firstCurrency === "Dólar" && secondCurrency === "Real")
				setResult((Number(amount) * dollar) / real);
			else if (firstCurrency === "Dólar" && secondCurrency === "Euro")
				setResult((Number(amount) * dollar) / euro);
			else if (firstCurrency === "Real" && secondCurrency === "Real")
				setResult((Number(amount) * real) / real);
			else if (firstCurrency === "Real" && secondCurrency === "Dólar")
				setResult((Number(amount) * real) / dollar);
			else if (firstCurrency === "Real" && secondCurrency === "Euro")
				setResult((Number(amount) * real) / euro);
			else if (firstCurrency === "Euro" && secondCurrency === "Euro")
				setResult((Number(amount) * euro) / euro);
			else if (firstCurrency === "Euro" && secondCurrency === "Dólar")
				setResult((Number(amount) * euro) / dollar);
			else if (firstCurrency === "Euro" && secondCurrency === "Real")
				setResult((Number(amount) * euro) / real);
		}
		else
			setResult(0);
	}

	return (
		<SafeAreaView style={ styles.body }>
			<ScrollView>
				<View style={ { ...styles.header, ...styles.boxShadow } }>
					<Text style={ styles.h1 }>{ title }</Text>
					<Text style={ styles.h2 }>{ subTitle }</Text>
				</View>
				<View style={ { ...styles.main } }>
					<View style={ styles.form }>
						<View style={ styles.amount }>
							<Text style={ styles.inputLabel }>Valor</Text>
							<TextInput
								onFocus={ () => setInputBorderColor("#1976D2") }
								onBlur={ () => setInputBorderColor("#000") }
								keyboardType={ "numeric" }
								style={ { ...styles.textInput, borderColor: inputBorderColor } }
								value={ amount }
								onChangeText={ value => {
									setResult(0);
									setAmount(value.replace(",", "."));
								} }
							/>
						</View>
						<View>
							<Picker selectedValue={ firstCurrency }
							        onValueChange={ value => {
								        setResult(0);
								        setFirstCurrency(value);
							        } }>
								{ currencyItems }
							</Picker>
							<Picker selectedValue={ secondCurrency }
							        onValueChange={ value => {
								        setResult(0);
								        setSecondCurrency(value);
							        } }>
								{ currencyItems }
							</Picker>
							<Pressable onPress={ () => convert() }
							           style={ { ...styles.boxShadow, ...styles.button, backgroundColor: "#1976D2" } }>
								<Text style={ styles.buttonText }>Converter</Text>
							</Pressable>
						</View>
						<View style={ { display: result !== 0 ? "flex" : "none" } }>
							<Text style={ styles.result }>{
								firstCurrency === "Dólar" && secondCurrency === "Dólar" ?
								`$ ${ Number(amount).toFixed(2).replace(".", ",") }\n=\n$ ${ result.toFixed(2).replace(".", ",") }` :
								firstCurrency === "Dólar" && secondCurrency === "Real" ?
								`$ ${ Number(amount).toFixed(2).replace(".", ",") }\n=\nR$ ${ result.toFixed(2).replace(".", ",") }` :
								firstCurrency === "Dólar" && secondCurrency === "Euro" ?
								`$ ${ Number(amount).toFixed(2).replace(".", ",") }\n=\n€ ${ result.toFixed(2).replace(".", ",") }` :
								firstCurrency === "Real" && secondCurrency === "Real" ?
								`R$ ${ Number(amount).toFixed(2).replace(".", ",") }\n=\nR$ ${ result.toFixed(2).replace(".", ",") }` :
								firstCurrency === "Real" && secondCurrency === "Dólar" ?
								`R$ ${ Number(amount).toFixed(2).replace(".", ",") }\n=\n$ ${ result.toFixed(2).replace(".", ",") }` :
								firstCurrency === "Real" && secondCurrency === "Euro" ?
								`R$ ${ Number(amount).toFixed(2).replace(".", ",") }\n=\n€ ${ result.toFixed(2).replace(".", ",") }` :
								firstCurrency === "Euro" && secondCurrency === "Euro" ?
								`€ ${ Number(amount).toFixed(2).replace(".", ",") }\n=\n€ ${ result.toFixed(2).replace(".", ",") }` :
								firstCurrency === "Euro" && secondCurrency === "Dólar" ?
								`€ ${ Number(amount).toFixed(2).replace(".", ",") }\n=\n$ ${ result.toFixed(2).replace(".", ",") }` :
								`€ ${ Number(amount).toFixed(2).replace(".", ",") }\n=\nR$ ${ result.toFixed(2).replace(".", ",") }`
							}</Text>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
