import { Platform } from "react-native";

const liveHost = "XXX";
const localHost = "http://localhost:5001/mealstogo-92344/us-central1";

export const isAndroid = Platform.OS === "android";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment || isAndroid ? liveHost : localHost;

export const isMock = true;

export const tokenStripe = "XXX";
