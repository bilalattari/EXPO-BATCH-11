import { ReactNode } from "react"
import { StyleProp, StyleSheet, TextStyle, TouchableOpacity } from "react-native"
import { ThemeText } from "./ThemeText"
import { Colors } from "@/constants/Colors"
interface ThemeButtonProps {
    children?: string | ReactNode,
    bgColor?: string,
    txtColor?: string,
    mt?: number,
    mb?: number,
    style?: Object,
    txtStyle?: TextStyle,
    onPress?: () => void
}

export function ThemeButton({ children, bgColor, txtColor, mt, mb, style, txtStyle, onPress }: ThemeButtonProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={[styles.container,
            bgColor && { backgroundColor: bgColor },
            mt ? { marginTop: mt } : undefined,
            mb ? { marginBottom: mb } : undefined,
                style
            ]} >
            <ThemeText color={txtColor || "#fff"}
                style={txtStyle}
            >{children}</ThemeText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 48,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: Colors.light.primary
    }
})