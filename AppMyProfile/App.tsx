import React                                                                           from "react";
import { Image, Linking, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";


const App = () => {
	const birthday = new Date(1981, 8, 9);
	const age = Math.abs(new Date(Date.now() - birthday.getTime()).getUTCFullYear() - 1970);

	const styles = StyleSheet.create({
		boxShadow: {
			shadowOpacity: .5,
			shadowOffset:  { width: 1, height: 1 },
			shadowRadius:  2,
			shadowColor:   "#000"
		}
	});

	return (
		<SafeAreaView style={ { backgroundColor: "#E9E9E9", flex: 1 } }>
			<ScrollView style={ { flexDirection: "column" } }>
				<Text style={ {
					...styles.boxShadow,
					width:           "100%",
					paddingVertical: 10,
					backgroundColor: "#187CED",
					color:           "#FFF",
					fontSize:        28,
					fontWeight:      "700",
					textAlign:       "center"
				} }>Meu Perfil</Text>
				<View style={ {
					...styles.boxShadow,
					width:     200,
					height:    200,
					margin:    10,
					alignSelf: "center"
				} }>
					<Image
						source={ require("./assets/img/Coelho.png") }
						style={ { width: "100%", height: "100%", borderRadius: 100 } }
					/>
				</View>
				<View style={ { flexDirection: "column", alignItems: "center" } }>
					<Text>Marcio Coelho</Text>
					<Text>{ age } anos</Text>
					<Text>Estudante</Text>
					<Pressable onPress={ () => Linking.openURL("https://github.com/coelhomarcio") }
					           style={ {
						           ...styles.boxShadow,
						           marginVertical:    40,
						           paddingHorizontal: 16,
						           paddingVertical:   8,
						           borderRadius:      4,
						           backgroundColor:   "#1B7CED"
					           } }>
						<Text style={ { color: "#FFF", fontSize: 18, fontWeight: "700", letterSpacing: 1 } }>GitHub</Text>
					</Pressable>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
