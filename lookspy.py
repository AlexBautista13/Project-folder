import requests
import json

import os
os.system('cls')


api_request = requests.get("https://api.coinmarketcap.com/v1/ticker/")
api = json.loads(api_request.content)

# Portfolio
my_portfolio = [
    { 
        "sym": "STEEM",
        "amount_owned": 3000,
        "price_paid_per": .80
    },

    {
        "sym": "XRP",
        "amount_owned": 5000,
        "price_paid_per": .20
    },

    {
        "sym": "XLM",
        "amount_owned": 1000,
        "price_paid_per": .10
    },

    {
        "sym": "EOS",
        "amount_owned": 2000,
        "price_paid_per": 2.80
    },

]

portfolio_profit_loss = 0

print("---------------------------")
for x in api:
    for coin in my_portfolio:
        if coin ["sym"] == x["symbol"]:

            #Math will happen here.
            total_paid = float(coin["amount_owned"]) * float(coin["price_paid_per"])
            current_value = float(coin["amount_owned"]) * float(x["price_usd"])
            profit_loss = current_value - total_paid
            portfolio_profit_loss += profit_loss

            print(x["name"])
            print("$(0:.2f)".format(float(x["price_usd"])))
            print("Rank: {0:2f}".format(float(x["rank"])))
            print("Total Paid: {0:.2f}".format(float(total_paid)))
            print("Current Value: {0:.2f}".format(float(current_value)))
            print("Profit/Loss: {0:.2f}".format(float(profit_loss)))
            print(x["percent_change_24h"])
            print("------------------------------")