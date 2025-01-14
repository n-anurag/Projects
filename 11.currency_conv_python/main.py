# module required: pip requests

import requests

api_key ="96f633dead764549bb63fdf0"
source_currency = input("Enter Source currency: ")
target_currency = input("Enter Target currency: eg('USD','EUR)")
amount = float(input("Enter amount to convert:"))

# source_currency = 'NPR'
# amount = 1
# target_currency = 'USD'

url =f'https://v6.exchangerate-api.com/v6/{api_key}/latest/{source_currency}'

response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    conversion_rates = data['conversion_rates']
   
    # If target curr is in conv rates then extract its exchange rates and * with amount to convert
    if target_currency in conversion_rates:
        exchange_rate = conversion_rates[target_currency]
        converted_amt = amount*exchange_rate
        print(F'You got {converted_amt} {target_currency} from {amount} {source_currency}')

    else:
        print("Currency not found")


else:
    print("Failed to fetch data")