import React, { useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from "react-native";
import Info_Card from "../components/Info_Card";
import color from "../constants/color";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { genTimeBlock } from "react-native-timetable";
import AppButton from "../components/AppButton";

const Dashboard = (props) => {
  const [teacher_id1, set_techer_id1] = useState();
  const [teacher_id2, set_techer_id2] = useState();
  const [teacher_id3, set_techer_id3] = useState();
  const [teacher_id4, set_techer_id4] = useState();
  const [teacher_name1, set_teacher_name1] = useState();
  const [teacher_name2, set_teacher_name2] = useState();
  const [teacher_name3, set_teacher_name3] = useState();
  const [teacher_name4, set_teacher_name4] = useState();
  const [subject1, set_subject1] = useState();
  const [subject2, set_subject2] = useState();
  const [subject3, set_subject3] = useState();
  const [subject4, set_subject4] = useState();

  useEffect(() => {
    getData();
  });

  async function getData() {
    const Keys = await AsyncStorage.getAllKeys();
    // console.log("Keys => ", Keys);
  }

  console.log("Subject 1 Data => ", subject1);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Enter Details</Text>
      </View>

      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.screenContent}>
          <Info_Card
            teacher_id={teacher_id1}
            teacher_name={teacher_name1}
            subject_name={subject1}
            onChangeTeacherID={(id) => set_techer_id1(id)}
            onChangeSubjectName={(name) => set_subject1(name)}
            onChangeTeacherName={(teacher_name) =>
              set_teacher_name1(teacher_name)
            }
          />

          <Info_Card
            teacher_id={teacher_id2}
            teacher_name={teacher_name2}
            subject_name={subject2}
            onChangeTeacherID={(id) => set_techer_id2(id)}
            onChangeSubjectName={(name) => set_subject2(name)}
            onChangeTeacherName={(teacher_name) =>
              set_teacher_name2(teacher_name)
            }
          />

          <Info_Card
            teacher_id={teacher_id3}
            teacher_name={teacher_name3}
            subject_name={subject3}
            onChangeTeacherID={(id) => set_techer_id3(id)}
            onChangeSubjectName={(name) => set_subject3(name)}
            onChangeTeacherName={(teacher_name) =>
              set_teacher_name3(teacher_name)
            }
          />

          <Info_Card
            teacher_id={teacher_id4}
            teacher_name={teacher_name4}
            subject_name={subject4}
            onChangeTeacherID={(id) => set_techer_id4(id)}
            onChangeSubjectName={(name) => set_subject4(name)}
            onChangeTeacherName={(teacher_name) =>
              set_teacher_name4(teacher_name)
            }
          />
        </View>

        <AppButton
          title="Generate Schedule"
          onPress={() =>
            props.navigation.navigate("Schedule", {
              data: [
                {
                  title: subject1,
                  startTime: genTimeBlock("MON", 9),
                  endTime: genTimeBlock("MON", 10),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name1],
                },
                {
                  title: subject3,
                  startTime: genTimeBlock("MON", 10),
                  endTime: genTimeBlock("MON", 11),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name3],
                },
                {
                  title: subject2,
                  startTime: genTimeBlock("MON", 11, 15),
                  endTime: genTimeBlock("MON", 13, 20),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name2],
                },
                {
                  title: subject4,
                  startTime: genTimeBlock("MON", 14),
                  endTime: genTimeBlock("MON", 15),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name4],
                },
                {
                  title: subject1,
                  startTime: genTimeBlock("MON", 15),
                  endTime: genTimeBlock("MON", 16),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name1],
                },
                {
                  title: subject4,
                  startTime: genTimeBlock("TUE", 9),
                  endTime: genTimeBlock("TUE", 10),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name4],
                },
                {
                  title: subject2,
                  startTime: genTimeBlock("TUE", 10),
                  endTime: genTimeBlock("TUE", 11),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name2],
                },
                {
                  title: subject1,
                  startTime: genTimeBlock("TUE", 11, 15),
                  endTime: genTimeBlock("TUE", 13, 20),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name1],
                },
                {
                  title: subject3,
                  startTime: genTimeBlock("TUE", 14),
                  endTime: genTimeBlock("TUE", 15),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name3],
                },
                {
                  title: subject4,
                  startTime: genTimeBlock("TUE", 15),
                  endTime: genTimeBlock("TUE", 16),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name4],
                },
                {
                  title: subject2,
                  startTime: genTimeBlock("WED", 9),
                  endTime: genTimeBlock("WED", 10),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name2],
                },
                {
                  title: subject3,
                  startTime: genTimeBlock("WED", 10),
                  endTime: genTimeBlock("WED", 11),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name3],
                },
                {
                  title: subject1,
                  startTime: genTimeBlock("WED", 11, 15),
                  endTime: genTimeBlock("WED", 13, 20),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name1],
                },
                {
                  title: subject2,
                  startTime: genTimeBlock("WED", 14),
                  endTime: genTimeBlock("WED", 15),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name2],
                },
                {
                  title: subject4,
                  startTime: genTimeBlock("WED", 15),
                  endTime: genTimeBlock("WED", 16),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name4],
                },
                {
                  title: subject4,
                  startTime: genTimeBlock("THU", 9),
                  endTime: genTimeBlock("THU", 10),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name4],
                },
                {
                  title: subject3,
                  startTime: genTimeBlock("THU", 10),
                  endTime: genTimeBlock("THU", 11),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name3],
                },
                {
                  title: subject2,
                  startTime: genTimeBlock("THU", 11, 15),
                  endTime: genTimeBlock("THU", 13, 20),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name2],
                },
                {
                  title: subject4,
                  startTime: genTimeBlock("THU", 14),
                  endTime: genTimeBlock("THU", 15),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name4],
                },
                {
                  title: subject1,
                  startTime: genTimeBlock("THU", 15),
                  endTime: genTimeBlock("THU", 16),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name1],
                },
                {
                  title: subject1,
                  startTime: genTimeBlock("FRI", 9),
                  endTime: genTimeBlock("FRI", 10),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name1],
                },
                {
                  title: subject3,
                  startTime: genTimeBlock("FRI", 10),
                  endTime: genTimeBlock("FRI", 11),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name3],
                },
                {
                  title: subject2,
                  startTime: genTimeBlock("FRI", 11, 15),
                  endTime: genTimeBlock("FRI", 13, 20),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name2],
                },
                {
                  title: subject4,
                  startTime: genTimeBlock("FRI", 14),
                  endTime: genTimeBlock("FRI", 15),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name4],
                },
                {
                  title: subject2,
                  startTime: genTimeBlock("FRI", 15),
                  endTime: genTimeBlock("FRI", 16),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name2],
                },
                {
                  title: subject1,
                  startTime: genTimeBlock("SAT", 9),
                  endTime: genTimeBlock("SAT", 10),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name1],
                },
                {
                  title: subject3,
                  startTime: genTimeBlock("SAT", 10),
                  endTime: genTimeBlock("SAT", 11),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name3],
                },
                {
                  title: subject2,
                  startTime: genTimeBlock("SAT", 11, 15),
                  endTime: genTimeBlock("SAT", 13, 20),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name2],
                },
                {
                  title: subject4,
                  startTime: genTimeBlock("SAT", 14),
                  endTime: genTimeBlock("SAT", 15),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name4],
                },
                {
                  title: subject1,
                  startTime: genTimeBlock("SAT", 15),
                  endTime: genTimeBlock("SAT", 16),
                  location: "BE Classroom",
                  extra_descriptions: [teacher_name1],
                },
              ],
            })
          }
          style={{ marginBottom: 20, elevation: 4 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
    backgroundColor: color.secondary,
  },
  titleContainer: {
    width: "100%",
    // borderWidth:1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Regular",
  },
  screenContent: {
    // borderWidth: 1,
    // borderColor: "green",
    width: "100%",
    height: 600,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
