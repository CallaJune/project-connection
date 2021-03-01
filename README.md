This is a very basic prototype illustrating a tool which could be used to help facilitate a global pen pal program between students whose schools are on the Project Connect map. 

[A summary of the project can be found here](https://docs.google.com/presentation/d/1uAQ3xEnpg9dq5EIl3T5tEtuYdd9oseE4Bejn_4bEbMc/edit?usp=sharing) and a [video overview, here](https://youtu.be/i5sqlvdNdK0).

It is centered around two micro-tools.

## Find Match

The first micro-tool is designed to match a school to another school as pen pal partners. The `schools` database, which holds schools records a `school_id` for each school which is meant to align with an ID from the Project Connect map. It also has a `match_id` field. When a school is matched with another school, both schools' `match_id` fields are updated (via a POST request to the API `makeMatch`). The schools that are matched are currently ones which do not yet have partners (via a GET request to the API `generateMatch/[school_id]`). If there were time for further development, pairings would be more specific and a list of potential partner schools would be generated, ranked by most to least aligned based on preferences such as number of students (to make sure most students had a pen pal), language, etc. More importantly, there would be more assistance in pairing students. 

The tool would not ask the user for a school ID, but rather have a search which would be populated to autofill with possible schools based on a table with Project Connect map schools that had opted into the program. 

## Enter Data

The second micro-tool is designed to be aligned with all possible fields that the Project Connect map can possibly display about a school. Full implementation would, as with above, not require the school ID but rather have a search bar which would autopopulate with the correct school given the Project Connect school ID or part of the school's name, allowing the user to select the correct school (by ID). 

How to run this server locally:

Create a .env file (e.g. `env.local`) with the following fields set to your own credentials:

```
PGUSER=
PGHOST=
PGPASSWORD=
PGDATABASE=
```

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
