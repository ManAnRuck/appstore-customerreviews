# AppStore Comments

get Apple AppStore Comments by npm Package

## install

`yarn install appstore-customerreviews`

or

`npm install appstore-customerreviews`

## How To Use

```ts
import { AppStoreCustomerReviews } from "appstore-customerreviews";

const api = new AppStoreCustomerReviews({
  id: "1341311162",
  languageCode: "de"
});

api.getComments().then(console.log)

```