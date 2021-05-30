import React, {useState} from 'react';
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

export default function PlannerScreen({navigation}) {
  const [selectedDate, setSelectedDate] = useState(null);
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
