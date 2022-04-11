import Slider                                                                           from "@react-native-community/slider";
import {
	Picker
}                                                                                       from "@react-native-picker/picker";
import React                                                                            from "react";
import { Keyboard, Pressable, SafeAreaView, ScrollView, Switch, Text, TextInput, View } from "react-native";
import { styles }                                                                       from "./App.styles";


const App = () => {
	const title = "Abertura de Conta Bancária";
	const genderList = ["", "Feminino", "Masculino"];
	const schoolingList = [
		"",
		"Educação Infantil",
		"Ensino Fundamental",
		"Ensino Médio",
		"Ensino Técnico",
		"Ensino Superior (Graduação)",
		"Pós-graduação",
		"Mestrado",
		"Doutorado"
	];

	const genderItems = genderList.map((value, key) => {
		return <Picker.Item key={ key } value={ value } label={ value }/>;
	});
	const schoolingItems = schoolingList.map((value, key) => {
		return <Picker.Item key={ key } value={ value } label={ value }/>;
	});

	const [name, setName] = React.useState("");
	const [age, setAge] = React.useState("");
	const [gender, setGender] = React.useState("");
	const [schooling, setSchooling] = React.useState("");
	const [isBrazilian, setIsBrazilian] = React.useState(true);
	const [accountLimit, setAccountLimit] = React.useState(0);
	const [nameColor, setNameColor] = React.useState("#000");
	const [ageColor, setAgeColor] = React.useState("#000");
	const [genderColor, setGenderColor] = React.useState("#000");
	const [schoolingColor, setSchoolingColor] = React.useState("#000");
	const [isShowData, setIsShowData] = React.useState(false);

	function submitForm(): void {
		Keyboard.dismiss();
		if ((name !== "" && name !== null && name.length >= 3) &&
		    (age !== null && !isNaN(Number(age)) && !isNaN(parseFloat(age)) && Number(age) > 0) &&
		    (gender !== "" && gender !== null) &&
		    (schooling !== "" && schooling !== null))
			setIsShowData(true);
		else {
			(name !== "" && name !== null && name.length >= 3) ?
			setNameColor("#4CAF50") :
			setNameColor("#F44336");
			(age !== null && !isNaN(Number(age)) && !isNaN(parseFloat(age)) && Number(age) > 0) ?
			setAgeColor("#4CAF50") :
			setAgeColor("#F44336");
			(gender !== "" && gender !== null) ?
			setGenderColor("#4CAF50") :
			setGenderColor("#F44336");
			(schooling !== "" && schooling !== null) ?
			setSchoolingColor("#4CAF50") :
			setSchoolingColor("#F44336");
		}
	}

	function resetForm(): void {
		setName("");
		setAge("");
		setGender("");
		setSchooling("");
		setIsBrazilian(true);
		setAccountLimit(0);
		setNameColor("#000");
		setAgeColor("#000");
		setGenderColor("#000");
		setSchoolingColor("#000");
		setIsShowData(false);
	}

	return (
		<SafeAreaView>
			<ScrollView style={ styles.body }>
				<View style={ styles.header }>
					<Text style={ styles.h1 }>{ title }</Text>
				</View>

				<View style={ styles.main }>
					<View style={ { display: !isShowData ? "flex" : "none" } }>
						<View style={ styles.formNameAge }>
							<View style={ styles.formName }>
								<Text style={ { ...styles.textLabel, color: nameColor } }>Nome completo</Text>
								<TextInput value={ name }
								           onFocus={ () => setNameColor("#00796B") }
								           onBlur={ () => setNameColor("#000") }
								           onChangeText={ value => setName(value) }
								           keyboardType={ "default" }
								           style={ { ...styles.textInput, ...styles.boxShadow, borderColor: nameColor } }
								/>
							</View>

							<View style={ styles.formAge }>
								<Text style={ { ...styles.textLabel, color: ageColor } }>Idade</Text>
								<TextInput value={ age }
								           onFocus={ () => setAgeColor("#00796B") }
								           onBlur={ () => setAgeColor("#000") }
								           onChangeText={ value => setAge(value.replace(",", ".")) }
								           keyboardType={ "numeric" }
								           style={ { ...styles.textInput, ...styles.boxShadow, borderColor: ageColor } }
								/>
							</View>
						</View>

						<View style={ styles.formGender }>
							<Text style={ { ...styles.textLabel, color: genderColor } }>Gênero</Text>
							<Picker selectedValue={ gender }
							        onFocus={ () => setGenderColor("#00796B") }
							        onBlur={ () => setGenderColor("#000") }
							        onValueChange={ value => setGender(value) }
							        style={ { ...styles.picker, ...styles.boxShadow, borderColor: genderColor } }>
								{ genderItems }
							</Picker>
						</View>

						<View style={ styles.formSchooling }>
							<Text style={ { ...styles.textLabel, color: schoolingColor } }>Escolaridade</Text>
							<Picker selectedValue={ schooling }
							        onFocus={ () => setSchoolingColor("#00796B") }
							        onBlur={ () => setSchoolingColor("#000") }
							        onValueChange={ value => setSchooling(value) }
							        style={ { ...styles.picker, ...styles.boxShadow, borderColor: schoolingColor } }>
								{ schoolingItems }
							</Picker>
						</View>

						<View style={ styles.formIsBrazilian }>
							<Text style={ styles.textLabel }>Nacionalidade Brasileira</Text>
							<Switch value={ isBrazilian }
							        onValueChange={ value => setIsBrazilian(value) }
							        style={ styles.boxShadow }/>
						</View>

						<View style={ styles.formAccountLimit }>
							<Text style={ styles.textLabel }>Limite da conta</Text>
							<Slider value={ accountLimit }
							        onValueChange={ value => setAccountLimit(value) }
							        style={ styles.boxShadow }/>
							<Text style={ { ...styles.textLabel, ...styles.textCenter } }>{ Math.floor(accountLimit * 1000) }</Text>
						</View>

						<Pressable onPress={ () => submitForm() } style={ { ...styles.pressable, ...styles.boxShadow } }>
							<Text style={ styles.textPressable }>Enviar</Text>
						</Pressable>
					</View>

					<View style={ { display: isShowData ? "flex" : "none" } }>
						<View style={ styles.result }>
							<Text style={ { ...styles.resultTitle, ...styles.textCenter } }>Dados enviados</Text>
							<Text style={ styles.resultText }>Nome: { name }</Text>
							<View>
								<Text style={ styles.resultText }>Idade: { age }</Text>
								<Text style={ styles.resultText }>Gênero: { gender }</Text>
							</View>
							<Text style={ styles.resultText }>Escolaridade: { schooling }</Text>
							<Text style={ styles.resultText }>Nacionalidade: { isBrazilian ? "Brasileira" : "Estrangeira" }</Text>
							<Text style={ styles.resultText }>Limite da conta: R$ {
								Math.floor(accountLimit * 1000).toFixed(2).replace(".", ",")
							}</Text>
						</View>

						<Pressable onPress={ () => resetForm() } style={ { ...styles.pressable, ...styles.boxShadow } }>
							<Text style={ styles.textPressable }>Voltar</Text>
						</Pressable>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
