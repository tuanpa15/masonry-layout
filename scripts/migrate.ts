import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { db } from "@lib/handler/user";

async function main() {
  await migrate(db, { migrationsFolder: "./drizzle" });
}

main();
