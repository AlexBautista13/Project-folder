import random

def game_start():
    answer = input('Enter your name')
    name_check(answer)

def main_menu():
    if answer == "yes":
        game_start()
    elif answer == "no":
        print("shutting down")
    else:  
        print("please enter yes or no")
        main_menu()

def name_check(arg):
    if arg == "Alex":
        print("you win")
    elif arg == "quit":
        print("you quit the game")
        main_menu()
    else:
        print("That name is not correct please try again")
        game_start()

game_start()