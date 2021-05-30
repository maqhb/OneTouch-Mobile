import { actions } from "./getTeamsDuck";

import TeamsService from "../../../../layers/services/TeamsService";
import {currentTeam} from "../currentTeam/currentTeamOps";
import {getUDetails} from "../../authorized/authorizedOps";
import AsyncStorage from "@react-native-async-storage/async-storage";
const TS = new TeamsService();

export const getTeamDetails = () => dispatch => {
    dispatch(actions.processingTeamDetails());
    TS.getDetails()
        .then(res=>{
            if(res.data.status==="success") {
                AsyncStorage.getItem("CurrTeam")
                    .then((value) => {
                        if (value !== 1) {
                            AsyncStorage.setItem("CurrTeam", res.data['teamSocialAccountDetails'][0][0]['team_id']);
                        }
                    })

                // const currTeam = this.LocalStore.getCurrTeam();
                dispatch(currentTeam(res.data['teamSocialAccountDetails'][0][0]['team_id']));

                dispatch(getUDetails());
                dispatch(actions.teamDetailsSuccess(res.data));
            }
            else{
                dispatch(actions.teamDetailsFailed(res.data))
            }
        })
        .catch( err =>
            dispatch(actions.teamDetailsFailed(err))
        );
}