import axios, { AxiosInstance } from "axios";
import { AppStoreCustomerReviews as ApiResponse, AppStoreCustomerReviewEntry } from "./types";

interface AppStoreCustomerReviewsProps {
  languageCode: string;
  id: string;
}

class AppStoreCustomerReviews {
  protected api: AxiosInstance;

  constructor({ id, languageCode }: AppStoreCustomerReviewsProps) {
    this.api = axios.create({
      baseURL: `https://itunes.apple.com/${languageCode}/rss/customerreviews/id=${id}` //
    });
  }

  public getComments = async () => {
    let hasMore = true;
    let page = 1;
    let entries: AppStoreCustomerReviewEntry[] = [];
    do {
      const result = await this.api.get<ApiResponse>(
        `/page=${page}/sortBy=mostRecent/json`
      );

      entries = [...entries, ...result.data.feed.entry];

      const lastLink = result.data.feed.link.find(
        ({ attributes }) => attributes.rel === "last"
      );


      if (result.status !== 200 || (lastLink  && lastLink.attributes.href.indexOf(`customerreviews/page=${page}`) !== -1)) {
        hasMore = false;
      }
      page++;
    } while (hasMore);
    return entries;
  };
}



export { AppStoreCustomerReviews };
