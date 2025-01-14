import random

choices = ("r", "p", "s")
stuffs = {"r": "rock", "p": "paper", "s": "scissors"}

while True:
    user_value = input("Enter Rock, Paper, or Scissors (r, p, s): ").lower()

    if user_value not in choices:
        print("Invalid input, please try again.")
        continue

    comp_value = random.choice(choices)

    print(f"Your choice: {stuffs[user_value]},\n Computer choice: {stuffs[comp_value]}")

    if (
        (user_value == "r" and comp_value == "s")
        or (user_value == "p" and comp_value == "r")
        or (user_value == "s" and comp_value == "p")
    ):
        print("You Win!")
    elif user_value == comp_value:
        print("It's a Tie!")
    else:
        print("You Lose!")
        break
