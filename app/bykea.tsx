
import 'react-native-reanimated';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';


export default function Bykea() {
  // for any text  <Text>
  // for any container  <View>
  // list <Flatlist /> , <SectionList/>
  // Input ke <TextInput />
  // Scroll <ScrollView />
  // Image <Image source />
  // Button <TouchableOpacity> , <Touchable> , <Pressable >
  // Icons , Vector icons
  // For Responsive , Dimensions ,Flex

  return (<SafeAreaView style={{
    flex: 1,

  }}>
    <View style={styles.header}>
      <MaterialIcons name="menu" size={24} color="green" />
      <Text>LOGO</Text>
      <MaterialIcons name="phone" size={24} color="green" />
    </View>
    <View style={styles.bannerImageView}>
      <Image
        style={styles.bannerImage}
        source={{ uri: "https://www.paradigmshift.com.pk/wp-content/uploads/2022/06/thumbnail_2B4D68F3-5159-438E-BB6D-91EAF2280295.jpg" }}
      />
    </View>
    <View style={styles.infoBar}>
      <MaterialIcons name="message" size={24} color="grey" />
      <MaterialIcons name="attach-money" size={24} color="grey" />
    </View>
    <View style={{
      flex: 2.3,
      marginHorizontal: 5,
      gap: 10
    }}>

      <View style={styles.row}>
        <Card text='Carpool' bgColor='lightgreen' icon={'electric-car'} />
        <Card text='Carpool' bgColor='skyblue' icon={'electric-car'} />
      </View>
      <View style={styles.row}>
        <Card text='Carpool' bgColor='#d9e3f0' icon={'electric-car'} />
        <Card text='Carpool' bgColor='#d9e3f0' icon={'electric-car'} />
      </View>
      <View style={styles.row}>
        <Card text='Carpool' bgColor='#d9e3f0' icon={'electric-car'} />
        <Card text='Carpool' bgColor='#d9e3f0' icon={'electric-car'} />
      </View>


    </View>

  </SafeAreaView>
  );
}

const Card = ({ icon = "electric-car", bgColor, text }: {
  icon: any, bgColor: string, text: string
}) => {
  return <View style={[styles.card, {
    backgroundColor: bgColor
  }]}>
    <Text style={{ textAlign: "right" }}>{text}</Text>
    <MaterialIcons name={icon} size={100} color="black" />
  </View>
}


const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderColor: 'blue',
    borderRadius: 8,
    justifyContent: "space-around",
    padding: 10
  },
  row: {
    flex: 1, backgroundColor: "#fff",
    flexDirection: "row",
    gap: 10
  },
  bannerImage: {
    height: "90%",
    width: "100%",
    borderRadius: 7,
    marginTop: 5,
    resizeMode: "cover"
  },
  bannerImageView: {
    flex: 1, marginHorizontal: 5, borderRadius: 7,

  },
  header:
  {
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
    backgroundColor: "white",
  },
  infoBar: {
    height: 40,
    backgroundColor: "#fff",
    marginHorizontal: 5,
    borderRadius: 9,
    marginTop: -10,
    alignItems: "center",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  }
})
