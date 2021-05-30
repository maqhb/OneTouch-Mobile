import { actions } from "./authorizedDuck";
import AuthService from "../../../layers/services/AuthService";
import LocalStore from "../../../layers/config/localStore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const auth = new AuthService()
const localStore = new LocalStore()

function setUser(data) {
    // const { token, user } = data;
    const { accessToken, user} = data;

    AsyncStorage.setItem("Token",accessToken);
    AsyncStorage.setItem("User",JSON.stringify(user));
    AsyncStorage.setItem("CurrUserId",user.user_id);
}

export const getUDetails = () =>async dispatch => {
    dispatch(actions.processingUserDetails())
    await auth.getUserDetails()
        .then(res =>{
            if (res.data.code === 200) {
                setUser(res.data)
                dispatch(actions.userDetailsSuccess(res.data))
            }
            else {
                dispatch(actions.userDetailsFailed(res.data))
            }
        })
        .catch( err =>
        dispatch(actions.userDetailsFailed(err))
    );

};
