import * as React                                                            from "react";
import { Pressable, SafeAreaView, ScrollView, Text, TextInput, View, Image } from "react-native";
import axios                                                                 from "axios";

const api = axios.create({ baseURL: "https://api.github.com" });

// @ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";

interface GitHub {
	login: string,
	id: number,
	node_id: string,
	avatar_url: string,
	gravatar_id: string,
	url: string,
	html_url: string,
	followers_url: string,
	following_url: string,
	gists_url: string,
	starred_url: string,
	subscriptions_url: string,
	organizations_url: string,
	repos_url: string,
	events_url: string,
	received_events_url: string,
	type: string,
	site_admin: false,
	name: string,
	company: null,
	blog: string,
	location: string,
	email: null,
	hireable: null,
	bio: null,
	twitter_username: null,
	public_repos: number,
	public_gists: number,
	followers: number,
	following: number,
	created_at: string,
	updated_at: string;
}

const App = () => {
	const [profile, setProfile] = React.useState<GitHub | null>(null);
	const [repos, setRepos] = React.useState<string[] | null>(null);
	const [input, setInput] = React.useState<string>("");

	const getProfile = async (dev: string) => {
		if (input === "") {
			alert("Informe o nome de usuário");
			return;
		}
		try {
			const apiResponse: any = await api.get(`/users/${ dev }`);
			if (apiResponse.data.message)
				setProfile(null);
			else {
				setProfile(apiResponse.data);
				const apiReposResponse: any = await api.get(`/users/${ dev }/repos`);
				if (apiResponse.data.message)
					setRepos(null);
				else {
					const repos: string[] = [];
					apiReposResponse.data.forEach((data: { name: string; }) => repos.push(data.name));
					setRepos(repos);
				}
			}
		}
		catch (e: any) {
			setProfile(null);
			setRepos(null);
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
					flexDirection:     "row",
					justifyContent:    "center",
					alignItems:        "center",
					shadowOpacity:     .4,
					shadowOffset:      { width: 0, height: 4 },
					shadowRadius:      4,
					shadowColor:       "#2C6CBC"
				} }>
					<Ionicons name="ios-logo-github" size={ 40 } color={ "#FFF" }/>
					<Text style={ {
						color:         "#FFF",
						fontSize:      28,
						fontWeight:    "600",
						letterSpacing: 2
					} }>
						&ensp;Perfil GitHub
					</Text>
				</View>


				<ScrollView>
					<View>
						<View style={ {
							margin:        16,
							shadowOpacity: .4,
							shadowOffset:  { width: 0, height: 4 },
							shadowRadius:  4,
							shadowColor:   "#2C6CBC"
						} }>
							<TextInput
								placeholder="Informe o nome de usuário"
								placeholderTextColor={ "#CCC" }
								value={ input }
								onChangeText={ value => setInput(value) }
								style={ {
									padding:     8,
									borderWidth: 1,
									borderColor: "#CCC",
									fontSize:    20
								} }
							/>
							<Pressable onPress={ () => getProfile(input) }
							           style={ {
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


						<View style={ { margin: 16, alignItems: "center" } }>
							<View style={ {
								width:         200,
								height:        200,
								margin:        10,
								alignSelf:     "center",
								shadowOpacity: .5,
								shadowOffset:  { width: 1, height: 1 },
								shadowRadius:  2,
								shadowColor:   "#000"
							} }>
								{ profile === null ?
								  <Image
									  source={ require("./assets/img/avatar.png") }
									  style={ { width: "100%", height: "100%", borderRadius: 100 } }
								  /> :
								  <Image
									  source={ { uri: profile.avatar_url } }
									  style={ { width: "100%", height: "100%", borderRadius: 100 } }
								  />
								}
							</View>


							<View>
								{
									profile === null ?
									<View style={ { marginVertical: 16 } }>
										<Text>Informe um nome de usuário válido</Text>
									</View> :
									<View style={ { marginVertical: 16 } }>
										<Text style={ { marginBottom: 8, textAlign: "center" } }>{ "ID\n" }{ profile.id } </Text>
										<Text style={ { marginBottom: 8, textAlign: "center" } }>{ "Nome\n" }{ profile.name }</Text>
										<Text style={ { marginBottom: 8, textAlign: "center" } }>{ "Repositórios\n" }{ repos?.map((
											repo,
											index
										) => {
											if (index === repos?.length - 1)
												return `[${ repo }]`;
											else
												return `[${ repo }]\n`;
										}) || "Não foi possível carregar os repositórios!" }</Text>
										<Text style={ {
											marginBottom: 8,
											textAlign:    "center"
										} }>{ "Criado em\n" }{ new Date(profile.created_at).toLocaleString() }</Text>
										<Text style={ {
											marginBottom: 8,
											textAlign:    "center"
										} }>{ "Seguidores\n" } { profile?.followers }</Text>
										<Text style={ { textAlign: "center" } }>{ "Seguindo\n" } { profile?.following }</Text>
									</View>
								}
							</View>
						</View>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default App;
