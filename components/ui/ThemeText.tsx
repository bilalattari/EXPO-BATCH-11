import { Colors } from "@/constants/Colors"
import { ReactNode } from "react"
import { StyleSheet, Text } from "react-native"

export function ThemeText({ children, style, color }: {
    children: string | ReactNode,
    style?: any,
    color?: string
}) {
    return (
        <Text style={[styles.txt, color && { color: color },
            style
        ]}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    txt: {
        color: Colors.light.text,
        fontWeight: 'bold'
    }
})