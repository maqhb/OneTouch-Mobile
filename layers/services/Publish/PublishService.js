import {HTTP_PUBLISH} from "../../../layers/lib/HTTPService";
import CONSTANTS from "../../../layers/config/constants";
import LocalStore from "../../config/localStore";
const localStore = new LocalStore()
import AsyncStorage from "@react-native-async-storage/async-storage";

const POST_BASIC = CONSTANTS.API_URL.POST_GENERAL
const SCHEDULE_BASIC = CONSTANTS.API_URL.POST_SCHEDULE
const UPLOAD_MEDIA = CONSTANTS.API_URL.UPLOAD_LOCAL_IMAGES
const GET_POST_SCHEDULED_DETAILS = CONSTANTS.API_URL.GET_POST_SCHEDULED_DETAILS

export default class PublishService{
    async publishPosts(post, teamId) {
        const token =await AsyncStorage.getItem("Token").then((value)=>{return value});
        return HTTP_PUBLISH.post(POST_BASIC+"?teamId="+teamId, post, {
            headers: {
                'Content-Type': "application/json",
                'x-access-token': token,
            }
        })
    }

    async schedulePosts(post) {
        const token =await AsyncStorage.getItem("Token").then((value)=>{return value});
        return HTTP_PUBLISH.post(SCHEDULE_BASIC, post, {
            headers: {
                'Content-Type': "application/json",
                'x-access-token': token,
            }
        })
    }

    async uploadLocalMedia(data, teamId) {const token =await AsyncStorage.getItem("Token").then((value)=>{return value});
        return HTTP_PUBLISH.post(UPLOAD_MEDIA+"?title=title&privacy=0&teamId="+teamId, data, {
            headers: {
                'Content-Type': "application/json",
                'x-access-token': token,
            }
        })
    }

    async getScheduledPosts(pageid) {
        const token =await AsyncStorage.getItem("Token").then((value)=>{return value});
        return HTTP_PUBLISH.get(GET_POST_SCHEDULED_DETAILS+"?fetchPageId="+pageid, {
            headers: {
                'Content-Type': "application/json",
                'x-access-token': token,
            }
        })
    }
}