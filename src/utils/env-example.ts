const liveHost = "XXX";
const localHost = "http://localhost:5001/mealstogo-92344/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;

export const isMock = false;
