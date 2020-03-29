from serpwow.google_search_results import GoogleSearchResults
import json

# create the serpwow object, passing in our API key
serpwow = GoogleSearchResults("39090B209642482C853B4B26EBF3127B")

# set up a dict for the search parameters
params = {
  "q" : "bread",
  "search_type" : "shopping"
}

# retrieve the search results as JSON
result = serpwow.get_json(params)

# pretty-print the result
print(json.dumps(result, indent=2, sort_keys=True))
