from serpwow.google_search_results import GoogleSearchResults
import json

# create the serpwow object, passing in our API key
serpwow = GoogleSearchResults("API_KEY_HERE")

# set up a dict for the search parameters
params = {
  "q" : "pizza"
}

# retrieve the search results as JSON
result = serpwow.get_json(params)

# pretty-print the result
print(json.dumps(result, indent=2, sort_keys=True)