import AsyncStorage from "@react-native-async-storage/async-storage";


const ACCESS_TOKEN = "ACCESS_TOKEN";
const USER = "USER";
const USER_NAME = "USER_NAME";
const CLIENT_ID = "CLIENT_ID";
const USER_ID = "USER_ID";
const REFRESH_TOKEN = "REFRESH_TOKEN";
const CURR_TEAM_ID = "CURR_TEAM_ID";
const CURR_EMAIL = "CURR_EMAIL";
const CURR_Network = "CURR_Network";
const TWITTER_STATE = "TWITTER_STATE"



export default class LocalStore {

    async setToken(tokenValue) {
        try {
            await AsyncStorage.setItem(ACCESS_TOKEN, tokenValue);
        } catch (err) {
            console.log("Error storing the auth Token", err);
        }
    };


    async setUserName(userName) {
        await AsyncStorage.setItem(USER_NAME, userName);
    }

    async getUserName() {
        await AsyncStorage.getItem(USER_NAME);
    }
//
//     setClientId(clientId) {
//         localStorage.setItem(CLIENT_ID, clientId.toString().trim());
//     }
//
//     getClientId() {
//         return localStorage.getItem(CLIENT_ID.trim());
//     }
//
    async setUserId(userId) {
        await AsyncStorage.setItem(USER_ID, userId);
    }

    async getUserId() {
        return(await AsyncStorage.getItem(USER_ID));
    }
//
//     removeUserId(){
//         localStorage.removeItem(USER_ID);
//     }
//
//     removeToken(){
//         localStorage.removeItem(ACCESS_TOKEN)
//     }
//
// //    Current Team
//         setCurrTeam(teamId){
//             localStorage.setItem(CURR_TEAM_ID,teamId);
//         }
//
//         getCurrTeam(){
//         return localStorage.getItem(CURR_TEAM_ID);
//         }
//
//     removeCurrTeam(){
//         localStorage.removeItem(CURR_TEAM_ID);
//     }
//
// //    Current Email
//



//
//     removeCurrEmail(){
//         localStorage.removeItem(CURR_EMAIL);
//     }
//
// //    set selected network
//     setCurrNetwork(network){
//         localStorage.setItem(CURR_Network,network);
//     }
//
//
//     getCurrNetwork(){
//         return localStorage.getItem(CURR_Network);
//     }
//
//     removeCurrNetwork(){
//         localStorage.removeItem(CURR_Network);
//     }
//
// //    Twitter
//     setTwitterState(state){
//         localStorage.setItem(TWITTER_STATE,state);
//     }

    // setRefreshToken(refreshTokenValue){
    //     localStorage.setItem(REFRESH_TOKEN, refreshTokenValue)
    // }
    //
    // getToken() {
    //     return localStorage.getItem(ACCESS_TOKEN);
    // }
    //
    // //User
    //
    async setUser(userValue) {
        return(await AsyncStorage.setItem(USER, userValue));
    }
    //
    // getUser() {
    //     return localStorage.getItem(USER);
    // }
    // removeUser(){
    //     localStorage.removeItem(USER)
    // }
    //
    // getTwitterState(){
    //     return localStorage.getItem(TWITTER_STATE);
    // }
    //
    // removeTwitterState(){
    //     localStorage.removeItem(TWITTER_STATE);
    // }
}
