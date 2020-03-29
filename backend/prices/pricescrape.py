import requests
from bs4 import BeautifulSoup
import csv
# Collect the github page
page =requests.get('https://www.google.com/search?q=toilet+paper&sa=X&rlz=1C1CHBF_enHK741HK741&biw=1024&bih=1000&tbm=shop&sxsrf=ALeKk03uOGDeF6NxIGWlzgwOIYodcxuwKA:1585511990984&tbs=p_ord:p&ei=Nv6AXojQO-mQggeFhJvgAg&ved=0ahUKEwiIw4m4vMDoAhVpiOAKHQXCBiwQuw0I8gIoAgg')
#print(page)
# Create a BeautifulSoup object
soup = BeautifulSoup(page.text, 'html.parser')
#print(soup)
# get the repo list
repo = soup.find(class_="sh-pr__product-results")
#print(repo)
# find all instances of that class (should return 25 as shown in the github main page)
repo_list = repo.find_all(class_='sh-dlr__list-result')

print(len(repo_list))

# Open writer with name
file_name = "github_trending_today.csv"
# set newline to be ‘' so that that new rows are appended without skipping any
f = csv.writer(open(file_name, 'w', newline=''))
# write a new row as a header
f.writerow(['Developer', 'Repo Name', 'Number of Stars'])
for repo in repo_list:
# find the first <a> tag and get the text. Split the text using ‘/' to get an array with developer name and repo name
	full_repo_name = repo.find('h1').find('a').text.split('/')
# extract the developer name at index 0
	developer = full_repo_name[0].strip()
# extract the repo name at index 1
	repo_name = full_repo_name[1].strip()
# find the first occurance of class octicon octicon-star and get the text from the parent (which is the number of stars)
	stars = repo.find(class_='octicon octicon-star').parent.parent.text.strip()
# strip() all to remove leading and traling white spaces
	print('developer', developer)
	print('name', repo_name)
	print('stars', stars)
	f.writerow([developer, repo_name, stars])