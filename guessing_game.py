import random
n = random.randint(1, 99)
guess = int(input("Enter an integer from 1 to 99:"))
while n !="guess":
    print
    if guess < n: 
        print ("guess is to low")
        guess = int(input("Enter an integer from 1 to 99;"))
    elif guess > n:
        print("guess is too high")
        guess = int(input("Enter an integer from 1 to 99;"))    
    else:
        print("you guess it right, GREAT JOB")
        break
    print    