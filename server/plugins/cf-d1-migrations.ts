import { consola } from "consola";
import { migrate } from "drizzle-orm/d1/migrator";

export default defineNitroPlugin(async () => {
	if (!import.meta.dev) return;

	// 不使用 nuxthub 和 cloudflare D1 了。
	// onHubReady(async () => {
	// 	await migrate(useDB(), { migrationsFolder: "server/database/cloudflare-D1/migrations" })
	// 		.then(() => {
	// 			consola.success("Database migrations done");
	// 		})
	// 		.catch((err) => {
	// 			consola.error("Database migrations failed", err);
	// 		});
	// });
});
