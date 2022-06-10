import * as React                                                             from "react";
import { Pressable, SafeAreaView, ScrollView, Switch, Text, TextInput, View } from "react-native";
import AsyncStorage
                                                                              from "@react-native-async-storage/async-storage";

// @ts-ignore
import Ionicons               from "react-native-vector-icons/Ionicons";
// @ts-ignore
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface objPWUP {
	phrase: string;
	isLight: boolean;
	isSmallFont: boolean;
}

const App = () => {
	const [obj, setObj] = React.useState({ phrase: "", isLight: true, isSmallFont: true });

	const getObj = async () => {
		try {
			const jsonObj = await AsyncStorage.getItem("@objPWUP");
			if (jsonObj === null)
				await storeObj(obj);
			else
				setObj(JSON.parse(jsonObj));
		}
		catch (e) {
			console.log(e);
		}
	};

	const storeObj = async (value: objPWUP) => {
		try {
			setObj(value);
			await AsyncStorage.setItem("@objPWUP", JSON.stringify(value));
		}
		catch (e) {
			console.log(e);
		}
	};

	const clearObj = async () => {
		try {
			setObj({ phrase: "", isLight: true, isSmallFont: true });
			await AsyncStorage.removeItem("@objPWUP");
		}
		catch (e) {
			console.log(e);
		}
	};

	React.useEffect(() => {
		getObj().then();
	}, []);

	return (
		<SafeAreaView>
			<ScrollView style={ { minHeight: "100%", backgroundColor: "#71C3F7" } }>
				<Text style={ {
					width:           "100%",
					paddingVertical: 10,
					backgroundColor: "#4F98DA",
					color:           "#FFF",
					fontSize:        22,
					fontWeight:      "700",
					textAlign:       "center",
					shadowOpacity:   .4,
					shadowOffset:    { width: 0, height: 4 },
					shadowRadius:    4,
					shadowColor:     "#2C6CBC"
				} }>Frase com Preferências do Usuário</Text>
				<View>
					<TextInput
						placeholder="Digite uma frase..."
						value={ obj.phrase }
						onChangeText={ value => {
							storeObj({ phrase: value, isLight: obj.isLight, isSmallFont: obj.isSmallFont }).then();
						} }
						style={ {
							marginTop:        20,
							marginHorizontal: 20,
							borderWidth:      1,
							borderColor:      "#2C6CBC",
							borderRadius:     4,
							padding:          16,
							color:            "#FFF",
							fontSize:         16,
							fontWeight:       "600"
						} }
					/>
				</View>
				<View style={ { padding: 20 } }>
					<View style={ { flexDirection: "row", justifyContent: "space-around" } }>
						<View style={ { width: 90, flexDirection: "row", justifyContent: "space-around", alignItems: "center" } }>
							<Ionicons
								name={ obj.isLight ? "ios-sunny" : "ios-moon" }
								size={ 28 }
								color={ "#2C6CBC" }
							/>
							<Switch
								trackColor={ { true: "#2C6CBC" } }
								thumbColor={ "#71C3F7" }
								value={ obj.isLight }
								onValueChange={ value => {
									storeObj({ phrase: obj.phrase, isLight: value, isSmallFont: obj.isSmallFont }).then();
								} }
							/>
						</View>
						<View style={ { width: 90, flexDirection: "row", justifyContent: "space-around", alignItems: "center" } }>
							<MaterialCommunityIcons
								name={ obj.isSmallFont ? "format-font-size-decrease" : "format-font-size-increase" }
								size={ 28 }
								color={ "#2C6CBC" }
							/>
							<Switch
								trackColor={ { true: "#2C6CBC" } }
								thumbColor={ "#71C3F7" }
								value={ obj.isSmallFont }
								onValueChange={ value => {
									storeObj({ phrase: obj.phrase, isLight: obj.isLight, isSmallFont: value }).then();
								} }
							/>
						</View>
					</View>
				</View>
				<View style={ {
					height:          200,
					margin:          20,
					padding:         10,
					borderWidth:     1,
					borderColor:     obj.isLight ? "#000" : "#FFF",
					borderRadius:    4,
					backgroundColor: obj.isLight ? "#FFF" : "#000"
				} }>
					<ScrollView>
						<Text style={ {
							color:    obj.isLight ? "#000" : "#FFF",
							fontSize: obj.isSmallFont ? 9 : 18
						} }
						>{ obj.phrase }</Text>
					</ScrollView>
				</View>
				<View style={ {
					width:          "50%",
					marginVertical: 20,
					alignSelf:      "center",
					justifyContent: "center"
				} }>
					<Pressable onPress={ () => clearObj() }
					           style={ {
						           paddingHorizontal: 16,
						           paddingVertical:   8,
						           borderRadius:      4,
						           backgroundColor:   "#1B7CED",
						           shadowOpacity:     .4,
						           shadowOffset:      { width: 0, height: 4 },
						           shadowRadius:      4,
						           shadowColor:       "#2C6CBC"
					           } }>
						<View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
							<Ionicons name="ios-trash" size={ 28 } color={ "#FFF" }/>
							<Text style={ {
								color:         "#FFF",
								fontSize:      20,
								fontWeight:    "700",
								letterSpacing: 2
							} }>&ensp;LIMPAR</Text>
						</View>
					</Pressable>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
