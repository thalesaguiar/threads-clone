import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export function PostHeading({
    name,
    createAt,
    verified,
  }: {
    name: string;
    createAt: string;
    verified: boolean;
  }) {
    return (
      <View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <Text style={{fontWeight: '500'}}>{name}</Text>
            {verified &&(
                <MaterialIcons name="verified" size={14} color={'#60a5fa'} />
            )}
        </View>
      </View>
    );
  }
  