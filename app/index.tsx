import { ThemeButton } from "@/components/ui/ThemeButton";
import { ThemeText } from "@/components/ui/ThemeText";
import { Colors } from "@/constants/Colors";
import { scale, verticalScale } from "@/utils/dimensions";
import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Home() {
    return (
        <View style={styles.container} >

            <Image
                style={styles.bgImg}
                source={require('../assets/images/right.png')}
            />
            <Image
                style={[styles.bgImg, { left: 0 }]}
                source={require('../assets/images/left.png')}
            />
            <View style={{
                flex: 1,
                justifyContent: "center"
            }}>
                <View>
                    <ThemeText
                        style={styles.txt}
                    >Loving pet Care
                    </ThemeText>
                    <ThemeText
                        style={styles.txt}
                    >in
                        your neighborhood</ThemeText>
                </View>

            </View>

            <View style={{
                flex: 2,
                justifyContent: "space-between"
            }}>
                <View style={{ marginHorizontal: 20 }}>
                    <ThemeButton
                        onPress={() => router.push('/bykea')}
                        mb={10}>
                        Find Pet Care
                    </ThemeButton>
                    <ThemeButton
                        txtColor={Colors.light.primary}
                        bgColor={Colors.light.secondary}>
                        Login with Phone Number
                    </ThemeButton>
                </View>

                <Image
                    style={{
                        height: scale(300),
                        width: "100%",
                        resizeMode: "contain"
                    }}
                    source={require('../assets/images/bottom.png')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light.background,
        flex: 1
    },
    txt: {
        textAlign: "center",
        fontSize: 20,

    },
    bgImg: {
        position: "absolute",
        resizeMode: "contain",
        height: 299,
        width: 200,
        right: 0,
        top: 60
    }
})