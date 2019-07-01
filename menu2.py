df = pd.DataFrame(pizzas, columns=["Pizzas"])
df.loc[:8, "Prices"] = 7.50    
df.loc[8:, "Prices"] = 13.50    
df.index += 1                   
total_bill = 0.0                
print("Welcome to Pizza Planet!" )
print("Here's our menu!")
print(df.to_string(justify='left',
                   header=False,
                   formatters={
                    'Pizzas':'{{:<{}s}}'.format(
                        df['Pizzas'].str.len().max()
                        ).format,
                    'Prices':'     ${:.2f}'.format})
elif int(order) in df.index:
        item = df.loc[int(order), "Pizzas"]     
        price = df.loc[int(order), "Prices"]    
        print "You've selected {}! That would be ${:.2f}.".format(item, price)
        total_bill += price
        continue
