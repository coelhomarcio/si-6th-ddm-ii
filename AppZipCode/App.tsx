import * as React                                         from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import axios                                              from "axios";

const api = axios.create({ baseURL: "https://viacep.com.br" });

interface ZipCode {
	cep: string;
	logradouro: string;
	complemento: string;
	bairro: string;
	localidade: string;
	uf: string;
	ibge: string;
	gia: string;
	ddd: string;
	siafi: string;
}

const App = () => {
	const [result, setResult] = React.useState<ZipCode | null | undefined>(undefined);
	const [input, setInput] = React.useState<string>("");

	const getResult = async (cep: string) => {
		try {
			const apiResponse: any = await api.get(`/ws/${ cep }/json`);
			if (apiResponse.data.erro)
				setResult(null);
			else
				setResult(apiResponse.data);
		}
		catch (e: any) {
			setResult(null);
			console.log(e.message);
		}
	};

	return (
		<SafeAreaView style={ { flex: 1 } }>
			<View style={ { backgroundColor: "#F9F9F9", flex: 1 } }>
				<View style={ {
					paddingHorizontal: 16,
					paddingVertical:   8,
					backgroundColor:   "#1B7CED",
					alignItems:        "center",
					shadowOpacity:     .4,
					shadowOffset:      { width: 0, height: 4 },
					shadowRadius:      4,
					shadowColor:       "#2C6CBC"
				} }>
					<Text style={ {
						color:         "#FFF",
						fontSize:      28,
						fontWeight:    "600",
						letterSpacing: 2
					} }>
						Consulta CEP
					</Text>
				</View>


				<View style={ {
					margin:        16,
					flexDirection: "row",
					shadowOpacity: .4,
					shadowOffset:  { width: 0, height: 4 },
					shadowRadius:  4,
					shadowColor:   "#2C6CBC"
				} }>
					<TextInput
						placeholder="Informe um CEP"
						placeholderTextColor={ "#CCC" }
						keyboardType={ "number-pad" }
						value={ input }
						onChangeText={ setInput }
						style={ {
							width:       "60%",
							padding:     8,
							borderWidth: 1,
							borderColor: "#CCC",
							fontSize:    20
						} }
					/>
					<Pressable onPress={ () => getResult(input) }
					           style={ {
						           width:             "40%",
						           paddingHorizontal: 16,
						           paddingVertical:   8,
						           backgroundColor:   "#1B7CED",
						           justifyContent:    "center",
						           alignItems:        "center"
					           } }>
						<View>
							<Text style={ { color: "#FFF", fontWeight: "600", letterSpacing: 2 } }>CONSULTAR</Text>
						</View>
					</Pressable>
				</View>


				<View style={ { marginVertical: 16, alignItems: "center" } }>
					<Text style={ { textAlign: "center" } }>{
						result === undefined ?
						"" :
						result === null ?
						"Informe um CEP válido!" :
						"CEP: " + result.cep + "\n\n" + result.logradouro + " - " +
						result.complemento +
						"\nBairro: " + result.bairro + "\nCidade: " + result.localidade +
						"\nEstado: " +
						result.uf + "\nDDD: " + result.ddd
					}
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default App;
