// https://vite.dev/config/
export default {
  base: Deno.env.get("REPO_NAME") ? `/${Deno.env.get("REPO_NAME")}/` : "/",
  server: { port: 3000, open: false },
  build: { target: "esnext", outDir: "dist", sourcemap: true },
};
