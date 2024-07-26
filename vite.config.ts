import fs from "node:fs"
import path from "node:path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig, loadEnv } from "vite"
import { VitePWA } from "vite-plugin-pwa"
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "")
	const useHttps =
		env.USE_HTTPS && env.USE_HTTPS === "true" && env.CERT_FILE && env.KEY_FILE
	return {
		plugins: [
			react(),
			VitePWA({
				registerType: "autoUpdate",
			}),
		],
		preview: {
			https: useHttps
				? {
						key: fs.readFileSync(path.resolve(__dirname, env.KEY_FILE)),
						cert: fs.readFileSync(path.resolve(__dirname, env.CERT_FILE)),
					}
				: undefined,
		},
	}
})
