import random

# generates random number from 1 to 100
random_number = random.randint(1,100)
print(random_number)
while True:
    user_input = int(input("Guess the number between 1 to 100:"))
    if user_input > random_number:
        print("Too High!")

    elif user_input < random_number:
        print("Too Low!")

    else:
        print("You guessed it!")
        break
