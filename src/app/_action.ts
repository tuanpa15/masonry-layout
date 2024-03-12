"use server";

import { insertFeed } from "@lib/handler/feed";

export const createFeed = async (data: any) => insertFeed(data);
