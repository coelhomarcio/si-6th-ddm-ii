import React                                                                from "react";
import { Image, SafeAreaView, ScrollView, Text, useWindowDimensions, View } from "react-native";
import { styles }                                                           from "./App.styles";


const App = () => {
	const title = "Anúncios";
	const deviceWidth = useWindowDimensions().width;
	const productList = [
		{
			product: "Bola de futebol de salão",
			price:   149.99,
			img:     require("./assets/img/0.png")
		},
		{
			product: "Bicicleta",
			price:   1299.99,
			img:     require("./assets/img/1.png")
		},
		{
			product: "Raquete de tênis",
			price:   487.9,
			img:     require("./assets/img/2.png")
		},
		{
			product: "Tênis de corrida",
			price:   799.99,
			img:     require("./assets/img/3.png")
		}
	];

	const productItems = productList.map((value, key) => {
		return [
			<View key={ key }>
				<Image
					resizeMode={ "contain" }
					source={ value.img }
					style={ { width: deviceWidth } }
				/>
				<View style={ styles.productDetails }>
					<Text style={ styles.productDetailsText }>{ value.product }</Text>
					<Text style={ styles.productDetailsText }>R$ { value.price.toFixed(2).replace(".", ",") }</Text>
				</View>
			</View>
		];
	});

	return (
		<SafeAreaView style={ styles.body }>
			<ScrollView showsVerticalScrollIndicator={ false }>
				<View style={ styles.header }>
					<Text style={ styles.h1 }>{ title }</Text>
				</View>

				<View style={ styles.main }>
					<ScrollView horizontal showsHorizontalScrollIndicator={ false }>
						{ productItems }
					</ScrollView>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
