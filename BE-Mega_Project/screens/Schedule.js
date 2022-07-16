import React, { Component } from "react";
import { SafeAreaView, StyleSheet, View, Alert } from "react-native";
import TimeTableView, { genTimeBlock } from "react-native-timetable";
import color from "../constants/color";

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.numOfDays = 5;
    this.pivotDate = genTimeBlock("mon");
  }

  state = {
    data: [],
  };

  scrollViewRef = (ref) => {
    this.timetableRef = ref;
  };

  onEventPress = (evt) => {
    Alert.alert("onEventPress", JSON.stringify(evt));
  };

  UNSAFE_componentWillMount() {
    const { data } = this.props.route.params;
    this.setState({ data: data });
  }

  render() {
    console.log("Data From Schedule Screen => ", this.state.data);
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <TimeTableView
            scrollViewRef={this.scrollViewRef}
            events={this.state.data}
            pivotTime={9}
            pivotEndTime={20}
            pivotDate={this.pivotDate}
            nDays={this.numOfDays}
            onEventPress={this.onEventPress}
            headerStyle={styles.headerStyle}
            formatDateHeader="dddd"
            locale="en-in"
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: color.primary,
  },
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
});
