import { getFeeds } from "@lib/handler/feed";
import Image from "next/image";

export default async function Home() {
  const feeds = await getFeeds({ limit: 10, offset: 0 });
  return (
    <div>
      {feeds.map((item) => (
        <Image
          key={item.id}
          src={item.imageUrl}
          alt={item.altText}
          width={200}
          height={200}
          className="object-cover"
        />
      ))}
    </div>
  );
}
