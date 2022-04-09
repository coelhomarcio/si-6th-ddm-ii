import React                                                           from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";


const App = () => {
	const title = "Contador de Pessoas";

	const [counter, setCounter] = React.useState(0);

	const styles = StyleSheet.create({
		boxShadow:  {
			shadowOpacity: .5,
			shadowOffset:  { width: 1, height: 1 },
			shadowRadius:  2,
			shadowColor:   "#000"
		},
		button:     {
			marginVertical:    20,
			paddingHorizontal: 64,
			paddingVertical:   8,
			borderRadius:      4,
			backgroundColor:   "#1976D2"
		},
		buttonText: {
			color:      "#FFF",
			fontSize:   56,
			fontWeight: "700",
			textAlign:  "center"
		}
	});

	function counterIncrement(): void {
		setCounter(counter + 1);
	}

	function counterDecrement(): void {
		if (counter > 0)
			setCounter(counter - 1);
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
					margin:         20,
					borderWidth:    2,
					borderStyle:    "dashed",
					borderColor:    "#1976D2",
					borderRadius:   100,
					alignSelf:      "center",
					justifyContent: "center",
					alignItems:     "center"
				} }>
					<Text style={ { fontSize: 112, fontWeight: "700" } }>{ counter }</Text>
				</View>
				<View style={ { flexDirection: "column", alignItems: "center" } }>
					<View>
						<Pressable onPress={ () => counterIncrement() }
						           style={ { ...styles.boxShadow, ...styles.button, backgroundColor: "#4CAF50" } }>
							<Text style={ styles.buttonText }>+</Text>
						</Pressable>
						<Pressable onPress={ () => counterDecrement() }
						           disabled={ !(counter > 0) }
						           style={ { ...styles.boxShadow, ...styles.button, backgroundColor: "#F44336" } }>
							<Text style={ styles.buttonText }>-</Text>
						</Pressable>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
