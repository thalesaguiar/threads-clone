import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import Lottie from "lottie-react-native";
import { RefreshControl } from "react-native-gesture-handler";
import * as React from "react";
import { createRamdomUser } from "../../utils/generate-dommy-data";
import { ThreadsContext } from "../../context/thread-contex";
import ThreadsItem from "../../components/ThreadsItem";

const user = createRamdomUser();

console.log(JSON.stringify(user));

export default function TabOneScreen() {
  const animationRef = React.useRef<Lottie>(null);
  const threads = React.useContext(ThreadsContext)

  return (
    <SafeAreaView>
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 40 }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {animationRef.current?.play();}}
            tintColor={"red"}
          />
        }
      >
        <Lottie
          ref={animationRef}
          source={require("../../assets/Animation - 1704071784133.json")}
          loop={false}
          autoPlay
          style={{ width: 90, height: 90, alignSelf: "center" }}
        />
        {threads.map((thread) => (<ThreadsItem key={thread.id} {...thread}/>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}
