export interface AppStoreCustomerReviews {
  feed: {
    author: {
      name: { label: string };
      uri: { label: string };
    };
    entry: AppStoreCustomerReviewEntry[];
    updated: {
        label: string;
    };
    rights: { label: string };
    title: { label: string };
    icon: {label: string};
    link: AppStoreCustomerReviewLink[];
    id: {
        label: string;
    }
  };
}

export interface AppStoreCustomerReviewEntry {
  author: {
    uri: {
      label: string;
    };
    name: {
      label: string;
    };
    label: string;
  };
  "im:version": {
    label: string;
  };
  "im:rating": {
    label: string;
  };
  id: {
    label: string;
  };
  title: {
    label: string;
  };
  content: {
    label: string;
    attributes: {
      type: string;
    };
  };
  link: {
    attributes: {
      rel: string;
      href: string;
    };
  };
  "im:voteSum": {
    label: string;
  };
  "im:contentType": {
    attributes: {
      term: string;
      label: string;
    };
  };
  "im:voteCount": {
    label: string;
  };
}

export interface AppStoreCustomerReviewLink {
    attributes: {
        rel: string;
        type: string;
        href: string;
    }
}