import React                                                                  from "react";
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";


const App = () => {
	const title = "Jogo do Número Aleatório";

	const [randomNumber, setRandomNumber] = React.useState(-1);

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

	function randomNumberGame(): void {
		setRandomNumber(Math.floor(Math.random() * 11));
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
						source={ require("./assets/img/random-number-game.jpeg") }
						style={ { width: "100%", height: "100%", borderRadius: 16, resizeMode: "stretch" } }
					/>
				</View>
				<View style={ {
					...styles.boxShadow,
					width:          200,
					marginBottom:   20,
					alignSelf:      "center",
					justifyContent: "center",
					alignItems:     "center"
				} }>
					<Text style={ {
						marginBottom: 20,
						marginLeft:   10,
						fontSize:     16,
						alignSelf:    "flex-start"
					} }>Pense em um nº de 0 a 10</Text>
					<Pressable onPress={ () => randomNumberGame() }
					           style={ { ...styles.boxShadow, ...styles.button, backgroundColor: "#1976D2" } }>
						<Text style={ styles.buttonText }>Gerar</Text>
					</Pressable>
					<View style={ {
						display:        randomNumber < 0 ? "none" : "flex",
						flexDirection:  "column",
						justifyContent: "center"
					} }>
						<Text style={ styles.result }>Resultado</Text>
						<Text style={ {
							marginBottom: 20,
							color:        "#1976D2",
							fontSize:     28,
							fontWeight:   "700",
							textAlign:    "center"
						} }>{ randomNumber }</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
