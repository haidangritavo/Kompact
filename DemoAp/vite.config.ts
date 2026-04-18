import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// NOTE: Thay 'DemoAp' bằng tên repository GitHub của bạn
export default defineConfig({
  base: "/DemoAp/",
  plugins: [react()],
});
