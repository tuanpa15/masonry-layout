import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import * as schema from "../schema/feed";
import { feeds } from "../schema/feed";
import { like } from "drizzle-orm";

export const db = drizzle(sql, { schema });

export type NewFeed = typeof feeds.$inferInsert;

export const insertFeed = async (feed: NewFeed) => {
  return db.insert(feeds).values(feed).returning();
};

export const getFeeds = async (params: {
  limit: number;
  offset: number;
  keyword?: string;
}) => {
  const result = await db
    .select()
    .from(feeds)
    .where(like(feeds.altText, `%${params.keyword}%`))
    .limit(params.limit)
    .offset(params.offset);
  return result;
};
