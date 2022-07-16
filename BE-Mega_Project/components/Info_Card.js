import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import color from "../constants/color";
import CheckBox from "./CheckBox";
import Form_Comp from "./Form_Comp";

const Info_Card = ({
  teacher_id,
  onChangeTeacherID,
  subject_name,
  onChangeSubjectName,
  teacher_name,
  onChangeTeacherName
}) => {
  const [is_checked, set_is_checked] = useState(false);

  function change_check_state() {
    set_is_checked(!is_checked);
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <Form_Comp
          column_title="Teacher ID"
          textFieldName="id"
          textInputContainer={styles.textInputContainer}
          value={teacher_id}
          onChangeText={onChangeTeacherID}
        />

        <Form_Comp
          column_title="Subject Name"
          textFieldName="subject name"
          value={subject_name}
          onChangeText={onChangeSubjectName}
          textInputContainer={{ width: 120, height: 30 }}
        />

        <Form_Comp
          column_title="Teacher Name"
          textFieldName="teacher name"
          value={teacher_name}
          onChangeText={onChangeTeacherName}
          textInputContainer={{ width: 140, height: 30 }}
        />
      </View>

      <View style={styles.row2}>
        <Text style={{ fontWeight: "bold", color: color.secondary }}>
          Is There Practical?
        </Text>

        <CheckBox
          isChecked={is_checked}
          checkBoxStyle={{ marginLeft: 10 }}
          onPress={() => change_check_state()}
        />

        {is_checked ? (
          <Form_Comp
            column_title="Practical Name"
            textInputContainer={{ width: 180, height: 25 }}
            container_style={{ marginLeft: "10%" }}
          />
        ) : null}
      </View>
    </View>
  );
};

export default Info_Card;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    elevation: 8,
    width: "95%",
    height: "20%",
    borderRadius: 10,
    overflow: "hidden",
    padding: 8,
    backgroundColor: color.primary,
  },
  textInputContainer: {
    width: 65,
    height: 30,
  },
  row2: {
    // borderWidth: 1,
    // borderColor: "white",
    height: "50%",
    alignItems: "center",
    flexDirection: "row",
  },
});
