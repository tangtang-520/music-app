import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import path from 'path';
import AutoImport from "unplugin-auto-import/vite";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // https://cn.vitejs.dev/config/#resolve-alias
    alias: {
      // 设置路径
      "~": path.resolve(__dirname, "./"),
      // 设置别名
      "@": path.resolve(__dirname, "./src"),
    },
    // https://cn.vitejs.dev/config/#resolve-extensions
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  plugins: [
    uni(),
    AutoImport({
      /* options */ imports: ["vue", "vue-router", "pinia", "uni-app"],
      dts: false,
    }),
  ],
  // server: {
  //   port: 80,
  //   host: true,
  //   open: false,
  //   proxy: {
  //     "/": {
  //       // target: 'http://172.18.1.152:8082/', //谭sir 本地
  //       // target: 'http://172.18.3.146:8082/',  // 彭峰本地
  //       target: "http://localhost:3000", // 测试服
  //       changeOrigin: true,
  //       rewrite: (p) => p.replace(/^\/dev-api/, ""),
  //     },
  //   },
  // },
});
