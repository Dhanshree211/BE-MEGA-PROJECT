import React from 'react'
import { StyleSheet, Text, View  , Image} from 'react-native'
import logos from "../constants/logos";
import color from "../constants/color";

const AppLogo = () => {
    return (
        <View style={styles.mainContainer}>
        <View style={styles.clockContainer}>
          <Image source={logos.clock} style={styles.clockImage} />
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text
            style={{
              color: color.secondary,
              alignItems: "center",
              fontFamily: "Regular",
              fontSize: 36,
            }}
          >
            schedulelt
          </Text>
        </View>
      </View>
    )
}

export default AppLogo

const styles = StyleSheet.create({
    clockContainer: {
        width: 80,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
      },
      mainContainer: {
        flexDirection: "row",
        // borderWidth: 1,
        // borderColor: "red"
      },
      clockImage: {
        width: 57,
        height: 56.54,
      },
})
