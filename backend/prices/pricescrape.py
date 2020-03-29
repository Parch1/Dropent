# Run with python 2

# Source: https://hackernoon.com/how-to-scrape-google-with-python-bo7d2tal

from bs4 import BeautifulSoup
import requests
import webbrowser

query = "bread"
query = query.replace(' ', '+')
url = "https://google.com/search?q=" + query + '&source=lnms&tbm=shop&start=0'

# "https://www.google.com/search?q=banana&sxsrf=ALeKk01OingE0MkDQki3KJNc6Bc3i9wReg:1585517218164&source=lnms&tbm=shop&sa=X&ved=2ahUKEwjOrcv0z8DoAhVVmnIEHYDcDbsQ_AUoA3oECBcQBQ&biw=834&bih=971"

# desktop user-agent
USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:65.0) Gecko/20100101 Firefox/65.0"
headers = {"user-agent" : USER_AGENT}

response = requests.get(url, headers=headers)

if response.status_code == 200:
	soup = BeautifulSoup(response.content, "html.parser")

	results = []
	for g in soup.find_all('div', class_='sh-dlr__content'):
		anchors = g.find_all('a')
		if anchors:
			title = g.find('h3').text
			link = anchors[0]['href']
			price = g.find('span', class_="Nr22bf").text
			item = {
			"title": title,
			"price": price,
			"link": link
			}
			results.append(item)

	print(results)
