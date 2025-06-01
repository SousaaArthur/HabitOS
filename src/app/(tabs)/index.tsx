import { View, Text } from "react-native";
import { styles } from "../../styles/home";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

// Components
import { ProgressCard } from "../../components/homeComponents/progressCard";
import { CardStreaks } from "../../components/homeComponents/cards/streaks";
import { ListOfHabits } from "../../components/homeComponents/listOfHabits";


export default function Index(){
  return(
    <View style={styles.main}>
      <View style={styles.header}>
        <View>
          <Text style={{fontSize:24, fontWeight:"bold"}}>HabitOS</Text>
          <Text>Olá, Arthur!</Text>
        </View>
        <View style={{flexDirection:"row", gap:12, alignItems:"center"}}>
          <View style={styles.contentLevel}>
            <FontAwesome name="star" size={12} color="#8A2BE2"/>
            <Text>Nível 1</Text>
          </View>
          <Ionicons name="settings-outline" size={24}/>
        </View>
      </View>
      <ProgressCard/>
      <CardStreaks/>
      <ListOfHabits/>
    </View>
  );
}