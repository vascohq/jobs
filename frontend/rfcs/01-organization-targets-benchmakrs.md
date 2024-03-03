# RFC: Organization targets benchmark

## Objective

Adding a benchmark badge to each cell in the Organization Targets table.

## Pending questions and assumptions

> (\*) Marks assumptions for the purpose of this RFC

- How is the data sourced?
  - in advance, via a batch / cron integration into Vasco datastore?
  - (\*) real-time by calling the provider API
- How do you authenticate to the provider API?
  - The customer needs to log in separately during his own session for confidentiality / licensing reasons
  - (\*) a common credential for the Vasco platform (allowing to expose the API through a proxy endpoint on Vasco platform)
- What are the data fetching capabilities of the API?
  - the endpoint needs to be called separately for each data point
  - (\*) benchmark values can be retrieved by specifying a period that spans a large enough timeline were our screen needs only one call, or few pages
- How cacheable is the data?
  - per user, per tenant, globally?
  - how often do we need to refresh?
    - I am guessing almost never as it's past data that should not change

## Technical solution

- Fetch the data as a separate API call in the page once we know the period that has to be covered

  - we use a separate API call to isolate the error and performance boundary from the main data retrieval

- Re-use the existing mechanism of the app to manage server state; in the current state of this exercise,
  it means reusing the `useFetch` hook and storing the result in a simple `useState`;

- Index the data by month/quarter/year once if it is not already served this way by the API

- Simply re-render when the data arrives and add it to the cells
  - we should cater for having the space even when there is no data to prevent the page from shifting / re-flowing abruptly

## Remarks / Opportunities

- More elaborate strategies might be implemented by leveraging a application data store (such as ReactQuery, MobX, Zustand...),
  were we might beneficiate from app caching depending on the cacheability of the data; if the user comes back to the same page
  we don't need to re-fetch; Pre-fetching would also be an option;
- How large / slow / unreliable is the API call? Additional measure might be taken using a more elaborate web worker architecture
  where we can eventually cache the data between sessions if the API is a catastrophe and data is not too confidential
