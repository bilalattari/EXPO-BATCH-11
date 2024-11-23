import { Dimensions } from 'react-native';

// Guideline sizes are based on standard ~5" screen mobile device
const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export function scale(size: number) {
    return Math.floor((width / guidelineBaseWidth) * size);
}

export function verticalScale(size: number) {
    return Math.floor((height / guidelineBaseHeight) * size);
}

export function moderateScale(size: number, factor = 0.5) {
    return Math.floor(size + (scale(size) - size) * factor);
}

export const screenWidth = width;

export const screenHeight = height;