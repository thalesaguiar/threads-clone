import * as React from "react";
import { Thread } from "../.expo/types/threads";
import { PostHeading } from "./PostHeading";
import { Text, View } from "react-native";

export default function ThreadsItem(thread: Thread): JSX.Element {
  return (
    <View>
      <Text>{thread.author.username}</Text>
      <View>
        <PostHeading
          name={thread.author.name}
          createAt={thread.createAt}
          verified={thread.author.verified}
        />
      </View>
    </View>
  );
}
