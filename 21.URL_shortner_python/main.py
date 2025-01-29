import random
import string

class URLShortner:
    def __init__(self):
        self.url_map ={}
        self.base_url = "http://short.ly/"

    def shorten(self, original_url):    

        short_code = ''.join(random.choices(string.ascii_letters + string.digits, k=6 ))
        self.url_map[short_code] = original_url
        return self.base_url + short_code

    def expand(self, short_url):
        short_code = short_url.replace(self.base_url , '')
        return self.url_map.get(short_code,'URL not found')

if __name__ == "__main__":
    shortener = URLShortner()
    short_url = shortener.shorten("https://localsellabs.com/short_code.html")
    print("short url :", short_url)
    print("original url :", shortener.expand(short_url))



