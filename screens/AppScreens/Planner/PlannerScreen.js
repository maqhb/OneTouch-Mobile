import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AuthHeadText from '../../../components/AppTexts/AuthHeadText';

import Header from '../../../components/Header';
import Screen from '../../../components/Screen';
import {getScheduledPosts} from "../../../layers/services/Publish";
import {Card} from "react-native-paper";
import {CardTitle} from "react-native-paper/src/components/Card/CardTitle";
import CardContent from "react-native-paper/src/components/Card/CardContent";

export default function PlannerScreen({navigation}) {
  const [selectedDate, setSelectedDate] = useState(null);

  const [responseMsg,setResponse] = useState(null);
  const [scheduleDetails, setScheduleDetails] = useState([])
  const [postContents, setPostContents] = useState([])
  const [events, setEvents] = useState([])
  const [selectedJobData , setSelectedJobData] = useState(null)
  const [refresh,setRefresh]=useState(false);

  useEffect(() => {
    getScheduledPosts(1, responseHandler)
  }, []);

  const responseHandler = (msg, data)=>{
    if(!msg){
      setPostContents(data.postContents)
      setScheduleDetails(data.scheduleDetails)
      console.log(data.scheduleDetails)
    }
    else{
      setResponse(msg)

    }
  }

  const getPostDetail = (postId)=>{
    let postDetail
    postContents.forEach((value, index)=>{
      if (value._id === postId){
        postDetail = value
      }
    })
    return postDetail
  }


  useEffect(()=>{

      if(scheduleDetails.length > 0 && events.length <= 0){
        createEvents()
      }

  },[scheduleDetails])

  const createEvents = ()=>{
    let eventObjs = []
    scheduleDetails.forEach((value, index)=>{
      let postContent = getPostDetail(value.mongo_schedule_id)
      if(postContent){
        eventObjs.push({
          'title': postContent.description || postContent.normalScheduleDate,
          'allDay': true,
          'start': value.one_time_schedule_date,
          'end': value.one_time_schedule_date,
          'data':{
            scheduleDetails: value,
            postContents: postContent
          }
        })
      }
    })
    setEvents(eventObjs)
    console.log(eventObjs)
  }



  const date = new Date().getDate();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var monthName = monthNames[month];
    var year = new Date().getFullYear();

    return monthName + ',' + ' ' + date;
  };

  const onDateChange = (date, type) => {
    console.log();
    //function to handle the date change
    if (type === 'START_DATE') {
      setSelectedDate(date);
    }
  };

  return (
    <>

      <Header screenName="Planner" hasBack={false} navigation={navigation} />

      <Screen feedBack={false}>
        {/*<View>*/}
          {events &&
              events.map((event,index)=>{
                return(
                    <View>
                <Card>
                <CardTitle title={event.title} subtitle={event.end}  />

                <CardContent>

                </CardContent>
                </Card>
                    </View>
                )
              })
          // <Text>
          //   {JSON.stringify(events)}
          // </Text>
          }
        {/*</View>*/}

        <View style={styles.calenderContainer}>
          <CalendarPicker
            headerWrapperStyle={{
              justifyContent: 'space-between',
            }}
            monthTitleStyle={{
              fontFamily: 'Poppins-Regular',
              fontSize: 30,
              fontWeight: 'bold',
              color: '#26AB',
            }}
            yearTitleStyle={{
              fontFamily: 'Poppins-Regular',
              fontSize: 30,
              fontWeight: 'bold',
              color: '#26AB',
            }}
            startFromMonday={false}
            dayLabelsWrapper={{
              marginHorizontal: 10,
              borderRadius: 10,
              backgroundColor: '#26ABFF',
            }}
            weekdays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
            months={[
              'January',
              'Febraury',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ]}
            previousTitle="Previous"
            previousTitleStyle={{
              paddingHorizontal: 10,
              fontFamily: 'Poppins-Regular',
              fontSize: 18,
              fontWeight: '500',
              color: '#26ABEE',
            }}
            nextTitle="Next"
            nextTitleStyle={{
              paddingHorizontal: 10,
              fontFamily: 'Poppins-Regular',
              fontSize: 18,
              fontWeight: '500',
              color: '#26ABEE',
            }}
            todayBackgroundColor="#d3d3d3"
            selectedDayColor="#26ABFF"
            selectedDayTextColor="#fff"
            scaleFactor={375}
            textStyle={{
              fontFamily: 'Poppins-Regular',
              color: '#000000',
            }}
            onDateChange={onDateChange}
          />
        </View>
        <View style={styles.addSheduleContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Schedule')}
            style={styles.addButtonCircle}
          >
            <IonIcons name="add" color="#fff" size={45} />
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 70,
            }}
          >
            <Text
              style={{
                color: '#696969',
                fontSize: 30,
                fontWeight: 'bold',
                fontFamily: 'Poppins-Regular',
              }}
            >
              ADD SCHEDULE
            </Text>
          </View>
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  calenderContainer: {
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 3,
  },
  addSheduleContainer: {
    height: 150,
    backgroundColor: '#fff',
    marginTop: 50,
    alignItems: 'center',
    elevation: 3,
    borderRadius: 20,
  },
  addButtonCircle: {
    width: 70,
    height: 70,
    backgroundColor: '#26ABFF',
    borderRadius: 35,
    position: 'absolute',
    marginTop: -30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
});

