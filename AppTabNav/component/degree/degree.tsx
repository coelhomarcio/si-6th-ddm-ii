import * as React                               from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";

export default function Degree() {
	return (
		<SafeAreaView style={ { backgroundColor: "#E9E9E9", flex: 1 } }>
			<ScrollView style={ { flexDirection: "column" } }>
				<View style={ { padding: 20 } }>
					<Text style={ { marginTop: 20, marginBottom: 20, fontSize: 22, fontWeight: "600" } }>Lorem Ipsum</Text>
					<Text>&emsp;&emsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ipsam magnam minus optio rerum
						vel? Accusamus adipisci dignissimos doloremque error, eum magnam magni nemo nisi quasi quos rem repellendus
						temporibus?</Text>
					<Text>&emsp;&emsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur, cumque dolor,
						doloribus eaque eius fugiat illo impedit maxime nesciunt optio sit veritatis. Dicta dolores labore
						laudantium nobis ratione ullam!</Text>
					<Text>&emsp;&emsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deserunt eos expedita
						quisquam tempora. Beatae commodi cum earum eius et illo itaque, necessitatibus nesciunt, odit officiis
						pariatur possimus sunt vero?</Text>
					<Text>&emsp;&emsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, doloribus enim
						maiores repudiandae veniam voluptatem. Atque cum distinctio dolore exercitationem explicabo id minima
						nesciunt optio placeat quo, ratione ullam, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Aliquid asperiores cum dolorum, eligendi fugiat id inventore itaque maxime, minus necessitatibus quos
						temporibus! Blanditiis cupiditate esse fuga fugiat illo perferendis veritatis? Lorem ipsum dolor sit amet,
						consectetur adipisicing elit. Alias consequatur doloremque eaque ipsam laudantium libero nesciunt sit,
						tempora veritatis voluptas! Doloribus excepturi fugit, maiores minus molestias natus officiis quasi
						quis.</Text>
					<Text style={ { marginTop: 20, marginBottom: 20, fontSize: 22, fontWeight: "600" } }>Ipsum Lorem</Text>
					<Text>&emsp;&emsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, blanditiis culpa cumque
						dolor facilis harum impedit inventore maiores maxime, modi neque officiis porro recusandae repellat,
						sapiente sequi temporibus vero voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
						aspernatur, atque, consectetur corporis cupiditate doloremque dolores doloribus, eveniet laboriosam laborum
						modi necessitatibus neque saepe soluta suscipit ut veritatis voluptas voluptatum!</Text>
					<Text>&emsp;&emsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci, animi aut
						consequuntur ex explicabo laudantium modi nemo reprehenderit sapiente? Ad in maiores odio quo similique sit
						sunt vel voluptatum?</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
