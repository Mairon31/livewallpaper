import { ApiResult } from "./types";

type Key = "Appearance" | "General" | "Wallpaper";

class API {
  async getConfig<T>(
    key: Key,
  ): Promise<ApiResult<T>> {
    try {
      if (!window.chrome.webview) return { error: "no webview", data: null };
      const { api } = window.chrome.webview.hostObjects;
      var json = await api.GetConfig(key);
      let res = JSON.parse(json);
      return { error: null, data: res };
    } catch (e) {
      console.log(e);
      return { error: e, data: null };
    }
  }

  async setConfig(
    key: Key,
    value: any,
  ): Promise<ApiResult<null>> {
    try {
      if (!window.chrome.webview) return { error: "no webview", data: null };
      const { api } = window.chrome.webview.hostObjects;
      await api.SetConfig(key, JSON.stringify(value));
      return { error: null, data: null };
    } catch (e) {
      console.log(e);
      return { error: e, data: null };
    }
  }
}

const api = new API();
export default api;