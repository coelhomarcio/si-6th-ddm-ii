import * as React                                                                      from "react";
import { View, Text, SafeAreaView, ScrollView, StyleSheet, Image, Pressable, Linking } from "react-native";

// @ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Personal() {
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
				<View style={ {
					...styles.boxShadow,
					width:     200,
					height:    200,
					margin:    10,
					alignSelf: "center"
				} }>
					<Image
						source={ require("../../assets/img/Coelho.png") }
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
						<View style={ { flexDirection: "row", alignItems: "center" } }>
							<Ionicons name="ios-logo-github" size={ 28 } color={ "#FFF" }/>
							<Text style={ {
								color:         "#FFF",
								fontSize:      18,
								fontWeight:    "700",
								letterSpacing: 2
							} }>&ensp;GitHub</Text>
						</View>
					</Pressable>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
