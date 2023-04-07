import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderSection from "../../components/HeaderSection";
import HomeIconButton from "../../components/buttons/HomeIconButton";
import { Colors } from "../theme/colors/colors";

const LeavApplicationVPdfScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderSection tittle="Leave Application" />

      <View style={styles.pdfViewSec}>
        <View style={styles.detailLetter}>
          <Image
            resizeMode="cover"
            source={require("../../assets/images/detail_pdf.png")}
            style={styles.letterImage}
          />
        </View>
      </View>

      <View style={styles.homeLink}>
        <HomeIconButton img={require("../../assets/icons/homeIcon.png")} />
      </View>
    </View>
  );
};

export default LeavApplicationVPdfScreen;

const styles = StyleSheet.create({
  pdfViewSec: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // flex: 1,
    marginVertical: 55,
  },
  detailLetter: {
    width: "75%",
    border: 1,
    borderColor: Colors.greay_theam,
    justifyContent: "center",
    alignSelf: "center",
    padding: 25,
    borderWidth: 1,
    borderColor: Colors.greay,
  },
  letterImage: {
    width: 235,
    height: 355,
    padding: 10,
  },
});
