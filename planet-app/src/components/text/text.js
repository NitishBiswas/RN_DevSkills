import React from "react";
import { View, Text as RNText } from "react-native";
import { mergeAll, flatten } from 'ramda';
import { presets } from "./text.preset";

const Text = ({ children, preset = 'default', style }) => {
    const textStyle = mergeAll(
        flatten([presets[preset], style])
    )
    return <RNText style={textStyle}>{children}</RNText>;
};

export default Text;
