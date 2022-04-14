import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useContext } from "react";
import { NewsContext } from "../../API/Context";
import { categories, sources } from "../../API/api";
import Carousel from "react-native-snap-carousel";

const DiscoverScreen = () => {
  const WindowWidth = Dimensions.get("window").width;
  // console.log(WindowWidth)
  const Item_Width = Math.round(WindowWidth / 3 );

  const { setCategory,setSource } = useContext(NewsContext);
  return (
    <View style={styles.container}>
    
      <Text style={styles.Heading}>categories</Text>
      <Carousel
        layout="default"
        data={categories}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={()=>{setCategory(item.name)}}>
            <Image source={{ uri: item.pic }} style={styles.caroselImage} />
            <Text style={{ fontSize: 18, textTransform: "capitalize" }}>
              {" "}
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        sliderWidth={WindowWidth}
        itemWidth={Item_Width}
        activeSlideAlignment={"start"}
        inactiveSlideScale={1}
        // inactiveSlideShift={10}
        inactiveSlideOpacity={1}

      />
      <Text style={styles.Heading}>source</Text>
      {/* <View>
        {
          sources.map((s)=>{
            <TouchableOpacity>
            <Text>{s.name}</Text>            
            </TouchableOpacity>)
          }
        }
      </View> */}
      <View style={styles.sources}>
        {sources.map((s) => (
          <TouchableOpacity
            onPress={() => setSource(s.id)}
            key={s.id}
            style={styles.sourceContainer}
          >
            <Image source={{ uri: s.pic }} style={styles.sourceImage} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
  },
  Heading: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomColor: "#007FFF",
    borderBottomWidth: 5,
    alignSelf: "flex-start",
    borderRadius: 10,
  },
  caroselImage: {
    height: 130,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  sources: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  sourceContainer: {
    height: 150,
    width: "40%",
    borderRadius: 10,
    margin: 15,
    // backgroundColor: "#cc313d",
  },
  sourceImage: {
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
});
