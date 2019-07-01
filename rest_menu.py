print("Bottega Diner")

import time
time.sleep(1.5)

print('Please choose an entree.')

import time
time.sleep(1)

print('Your options are')

choice = input("""
A: Prime Rib
B: Burger
C: Bacon Sandwhich
D: Vegiable Soup
E: Ribs 

Please enter your choice: """)

if choice == "A" or choice =="a":
  print(input('That is 13.99, I recommend getting that Medium Rare.'))

elif choice == "B" or choice =="b":
  print(input('That is 9.99 and how would you like that cooked as well?'))

elif choice == "C" or choice =="c":
  print(input('That is 8.99 and would you like a salad with that as well.'))

elif choice=="D" or choice=="d":
  print(input('That is 5.99 and it goes so well with wheat bread.'))

elif choice=="E" or choice=="e":
  print(input('That is 9.99 and I strongly suggest the beans with them.'))

import time
time.sleep(1)

print('What two sides would you like with that?')
sides = input("""
A: Salad
B: Bacon Beans
C: Fries
D: Bread
E: Beans

Please enter your choice: """)

if choice == "A" or choice =="a":
  
  print(input('Perfect and for your second side?  The chef and I highly recommend the fries.'))
elif choice == "B" or choice =="b":

  print(input('Perfect and for your second side?  I would recommend the Bread with those.'))
elif choice == "C" or choice =="c":

  print(input('Perfect and for your second side?  The Salad go great with those.'))

elif choice=="D" or choice=="d":
  print(input('Perfect and for your second side?  I highly recommend the beans with that.'))

elif choice=="E" or choice=="e":
  print(input('Perfect and for your second side?  I highly recommend the Bacon Beans with that.'))
print