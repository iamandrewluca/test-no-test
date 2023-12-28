- Write dumb code.
- Name things exactly what they do.
- Use battle tested code.
- Avoid classical statements for/if/while (use filter, map, find, some, every... and ocassionally reduce)
- Return early.
- Use classical statements for/if/while only when code starts to "perform slowly". When using classical statements try not to go deeper then 2 indents.
- Write small functions.
- Runtime validate only external data. Everything internal to the project is static.
- Fully rely on language typing.
- Do mostly Integration, E2E or Snapshot testing.
- Rely on default values.
- If available use Maybe/Either/Optional even better.
- Biased. Use 4 space/tab width indentation. This will make your code to look ugly when you start indenting more then 2 levels.
- Don't test Third-Party Library Wrappers.
- Mapping data should be covered by typing system
- Don't mutate input data. Mostly allowed for local data.
- Try to write declarative code instead of imperative

https://youtu.be/rR4n-0KYeKQ
