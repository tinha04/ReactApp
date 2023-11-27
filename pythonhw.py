import requests

result = requests.get('https://catfact.ninja/breeds')
data = result.json()

class Cat:
    def __init__(self):
        self.api_url = 'https://catfact.ninja/breeds'

    def get_nth_cat_breed(self, n):
        result = requests.get(self.api_url)
        breeds = data.get('data', [])
        if 0 < n <= len(breeds):
                return breeds[n - 1]

cat_breeds = Cat()
nth_breed = cat_breeds.get_nth_cat_breed(5)

print(nth_breed)