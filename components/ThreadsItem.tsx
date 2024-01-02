import * as React from "react";
import { Thread } from "../.expo/types/threads";
import { Text, View, useColorScheme } from "react-native";
import { AntDesign, Feather, FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { timeAgo } from "../utils/time-ago";

export default function ThreadsItem(
  thread: Thread,
  createdAt: string
): JSX.Element {
  return (
    <View>
      <Text>{thread.author.username}</Text>
      <View>
        <PostHeading
          name={thread.author.name}
          createdAt={thread.createdAt}
          verified={thread.author.verified}
        />
        <BottomIcons />
        <PostFooter replies={thread.repliesCount} likes={thread.likesCount}/>
      </View>
    </View>
  );
}
export function PostHeading({
  name,
  createdAt,
  verified,
}: {
  name: string;
  createdAt: string;
  verified: boolean;
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexGrow: 1,
        width: "100%",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Text style={{ fontWeight: "500" }}>{name}</Text>
        {verified && (
          <MaterialIcons name="verified" size={14} color="#60a5fa" />
        )}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Text style={{ color: "gray" }}>{timeAgo(createdAt)}</Text>
        <Feather name="more-horizontal" size={14} color="gray" />
      </View>
    </View>
  );
}

function PostFooter({ replies, likes }: { replies: number; likes: number }) {
  return (
    <Text style={{ color: "gray" }}>
      {replies} replies . {likes}likes
    </Text>
  );
}

function BottomIcons() {
  const iconSize = 20;
  const currentTheme = useColorScheme();
  const iconcolor = currentTheme === "dark" ? "white" : "black";
  return(
    <View style={{flexDirection:"row", alignItems:"center", gap: 10}}>
      <FontAwesome name="heart-o" size={iconSize} color={iconcolor}/>
      <Ionicons name="chatbubble-outline" size={iconSize} color={iconcolor}/>
      <AntDesign name="retweet" size={iconSize} color={iconcolor}/>
      <Feather name="send" size={iconSize} color={iconcolor}/>
    </View>
  )
}