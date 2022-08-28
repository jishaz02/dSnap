import { StorageProvider } from "@arcana/storage";
import { AuthProvider, AppMode } from "@arcana/auth";

let auth;
let storageProvider;

export const getAuth = async () => {
  if (!auth) {
    auth = new AuthProvider("2160");
    await auth.init({ appMode: AppMode.Full, position: "right" });
  }
  return auth;
};

export const getStorageProvider = async () => {
  if (!storageProvider) {
    storageProvider = new StorageProvider({
      appId: "2160",
      provider: window.arcana.provider,
    });
  }
  return storageProvider;
};
