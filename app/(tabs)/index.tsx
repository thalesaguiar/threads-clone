import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from "react-native";
import Lottie from "lottie-react-native";
import { setBackgroundColorAsync } from "expo-system-ui";
import { RefreshControl } from "react-native-gesture-handler";

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <StatusBar barStyle={"dark-content"} translucent />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 40 }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {}}
            tintColor={"transparent"}
          />
        }
      >
        <Lottie
          source={require("../../assets/Animation - 1704071784133.json")}
          loop={false}
          autoPlay
          style={{ width: 90, height: 90, alignSelf: "center" }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
