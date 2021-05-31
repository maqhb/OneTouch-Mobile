import { actions } from "./loginDuck";
import AuthService from "../../../../layers/services/AuthService";
import LocalStore, {getCurrEmail, setCurrEmail} from "../../../../layers/config/localStore";
import Animated from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage"
import {Alert} from "react-native";

const auth = new AuthService()
const localStore = new LocalStore()
//               Register UserService
// export const registerUser = (userData, history) => dispatch => {
//     auth.signUp(userData).then(res => history.push("/Login"))
//         .catch(err =>
//             dispatch(actions.getError(err.response))
//         );
// };

function setUser(data) {
    // const { token, user } = data;
    const { accessToken, user} = data;
    AsyncStorage.setItem("Token",accessToken);
    AsyncStorage.setItem("User",JSON.stringify(user));
    AsyncStorage.setItem("CurrUserId",JSON.stringify(user.user_id));
    console.log("User Data Sets")
}

export const resetOTP =()=>dispatch=>{
    dispatch(actions.resetLoginError());
}

//get OTP
export const getOTP = userData => dispatch => {
    // dispatch(actions.processingLoginMessage());
    auth.logIn(userData)
        .then(async res => {
            //              Save to localStorage
            if (res.data.code === 200) {
                // setUser(res.data)
                await AsyncStorage.setItem("currEmail",res.data.user.email);
                dispatch(actions.loginOTP());

            } else {
                dispatch(actions.loginFailed(res.data.error))
            }
        }).catch( err =>
        dispatch(actions.loginFailed(err))
    );
};

//forgot Password
export const forgPassword = email => dispatch => {
    dispatch(actions.processingLoginMessage());
    auth.forgotPassword(email)
        .then(res => {
            //              Save to localStorage
            if (res.data.code === 200) {
                // setUser(res.data)
                // localStore.setCurrEmail(res.data.user.email);
                dispatch(actions.loginForgot(res.data.message));
            } else {
                dispatch(actions.loginFailed(res.data.error))
            }
        }).catch( err =>
        dispatch(actions.loginFailed(err))
    );
};

//Social Login
export const socialLog = network => dispatch => {
    dispatch(actions.processingLoginMessage());
    auth.socialLogin(network)
        .then(res => {
            //              Save to localStorage
            if (res.data.code === 200) {
                // setUser(res.data)
                // localStore.setCurrEmail(res.data.user.email);
                console.log(res.data)
                window.location.assign(res.data.navigateUrl)
                // dispatch(actions.loginForgot(res.data.message));
            } else {
                dispatch(actions.loginFailed(res.data.error))
            }
        }).catch( err =>
        dispatch(actions.loginFailed(err))
    );
};

//reset Password
export const resPassword = (email,np) => dispatch => {
    alert(email);
    dispatch(actions.processingLoginMessage());
    auth.resetPassword(email,np)
        .then(res => {
            //              Save to localStorage
            if (res.data.code === 200) {
                console.log(res.data)
                // setUser(res.data)
                // localStore.setCurrEmail(res.data.user.email);
                // dispatch(actions.loginForgot(res.data.message));
            } else {
                dispatch(actions.loginFailed(res.data.error))
            }
        }).catch( err =>
        dispatch(actions.loginFailed(err))
    );
};
//                      Login - get user token
export const loginUser = userData => dispatch => {
    dispatch(actions.processingLoginMessage());
    auth.validateOTP(userData)
        .then(res => {
        //              Save to localStorage
        if (res.data.code === 200) {
            setUser(res.data)
            dispatch(actions.loginSuccess(res.data.user));
        } else {
            Alert.alert("OTP Wrong. Try Again")
            // dispatch(actions.loginFailed(res.data.error))
        }
    }).catch( err =>
        console.log(err)
        // dispatch(actions.loginFailed(err))
    );
};

// Login Instagram 
export const loginInstagram = userData => dispatch => {
    auth.loginBasicInsta(userData).then(res => {
        // Save to localStorage
        if (res.data) {
            console.log(res.data);
            // setUser(res.data,dispatch)
        } else {
            console.log("No UserService Logged")
        }
    })
        .catch(err =>
            dispatch(actions.getError(err.response))
        );
};

export const loggedUser = data => dispatch => {
    console.log("LOGGED USER" + data);
    setUser(data, dispatch)
}

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from local storage
    // localStore.removeToken();
    // localStore.removeUser();
    // localStore.removeCurrTeam();
    // localStore.removeUserId();
    // Remove auth header for future requests
    // Set current user to empty object {} which will set isAuthenticated to false
    //todo create reducer and action for logout
    dispatch(actions.loginSuccess(null));
};
