import {
  Card,
  CardContent,
  //   CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  //   MessageSquare,
  //   Copy,
  //   Ban,
  //   Heart,
  TrendingUp,
  Newspaper,
} from "lucide-react";
import { useEffect, useState } from "react";
import getHighlights from "@/controller/news";

type Article = {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
};
export default function TrendingNews() {
  const [news, setNews] = useState<Article[]>([]);
  const sendToNewsPage = (url: string) => () => {
    window.open(url, "_blank");
  };
  useEffect(() => {
    async function fetchData() {
      const data = await getHighlights();
      setNews(data.articles);
    }
    fetchData();
  }, []);

  return (
    <Card className="w-full h-[500px] relative rounded-lg border bg-card text-card-foreground shadow-sm mt-2">
      <CardHeader className="flex flex-row items-center gap-2 py-3 ">
        <Newspaper />
        <CardTitle>Trending News</CardTitle>
        <TrendingUp />
      </CardHeader>
      <CardContent className="h-[400px] w-[300px]  overflow-y-scroll">
        {news.length > 0
          ? news.map((item, i) => {
              return (
                <div
                  key={item.publishedAt + i}
                  onClick={sendToNewsPage(item.url)}
                  className="cursor-pointer"
                >
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                      <div className="flex flex-row items-center gap-2">
                        <span className="text-sm font-bold">
                          {item.source.name}
                        </span>
                        <span className="text-sm text-card-foreground">
                          {new Date(item.publishedAt).toLocaleDateString()}
                        </span>
                      </div>
                      <span className="text-sm text-card-foreground overflow-hidden text-ellipsis whitespace-nowrap max-w-[275px] min-w-[200px]">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <Separator className="my-3" />
                </div>
              );
            })
          : null}
      </CardContent>
    </Card>
  );
}
