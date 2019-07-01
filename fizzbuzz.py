# "How to implement Fizzbuzz in python"
# "Installing Anaconda Python Dta Science Platform"
# "Python Script for pulling in the same column from an Array of Arrays"

# Libraries:
# -requests
# -inflection
# -beautifulsoup

# pip install requests
# pip install inflection
# pip install beautifulsoup4

# https://www.dailysmarty.com/posts/how-to-implement-fizzbuzz-in-python
# https://www.dailysmarty.com/posts/installing-anaconda-python-data-science-platform
# https://www.dailysmarty.com/posts/python-script-for-pulling-in-the-same-column-from-an-array-of-arrays

import requests
from bs4 import BeautifulSoup
from inflection import titleize

def title_generator(links):
    titles = []

    def post_formatter(url):
        if 'posts' in url:
            url = url.split('/')[-1]
            url = url.replace('-', ' ')
            url = titleize(url)
            titles.append(url)


    for link in links:
        post_formatter(link["href"])


    return titles


r = requests.get('http://www.dailysmarty.com/topics/python')
soup = BeautifulSoup(r.text, 'html.parser')
links = soup.find_all('a')
titles = title_generator(links)

for title in titles:
    print(title)