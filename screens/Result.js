import { LinearGradient } from "expo-linear-gradient";
import React, { useLayoutEffect } from "react";
import { StyleSheet, View, Share, TouchableOpacity } from "react-native";
import { H1, H4 } from "../components/Text";
import { AdMobInterstitial } from "expo-ads-admob";
import { ADMOB_INTERSTITIAL_AD_KEY } from "../keys";

const Result = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Your score",
      headerLeft: "",
    });
  }, [navigation]);

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Hi everyone, I scored ${route.params.score}/10 on the quiz app. Even you can play the quiz by installing it from the Google Play Store - https://play.google.com/store/apps/details?id=app.web.prashoonapps.quizapp`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleNavigation = async () => {
    await AdMobInterstitial.setAdUnitID(
      ADMOB_INTERSTITIAL_AD_KEY
    ); // Test ID - ca-app-pub-3940256099942544/1033173712
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
    navigation.replace("Topics");
  };

  return (
    <LinearGradient
      colors={["#667db6", "#0082c8", "#0082c8", "#667db6"]}
      start={[0, 0]}
      end={[1, 0]}
      style={styles.container}
    >
      <H1 style={{ fontSize: 25 }} color="white">
        Your score is: {route.params.score}/10
      </H1>

      <View style={{ height: 20 }} />

      <TouchableOpacity style={styles.button} onPress={handleShare}>
        <H4>Share Your Score</H4>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonOrange} onPress={handleNavigation}>
        <H4 color="white">Play Some Other Quiz</H4>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonOrange: {
    backgroundColor: "#F73100",
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 20,
  },
});
