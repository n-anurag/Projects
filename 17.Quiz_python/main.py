questions = (
    "How many elements are in the periodic table?: ",
    "Which animal lays the largest eggs?: ",
    "What is the most abundant gas in Earth's atmosphere?: ",
    "How many bones are in the human body?: ",
    "Which planet in the solar system is the hottest?: "
)

options = (
    ("A. 116", "B. 117", "C. 118", "D. 119"),
    ("A. Whale", "B. Crocodile", "C. Elephant", "D. Ostrich"),
    ("A. Nitrogen", "B. Oxygen", "C. Carbon-Dioxide", "D. Hydrogen"),
    ("A. 206", "B. 207", "C. 208", "D. 209"),
    ("A. Mercury", "B. Venus", "C. Earth", "D. Mars")
)

answers = ("C", "D", "A", "A", "B")

guesses = []
score = 0

for i in range(len(questions)):
    print("--------------------------------")
    print(questions[i])

    for option in options[i]:
        print(option)

    # Input validation loop
    while True:
        guess = input("Choose one (A, B, C, D): ").upper()
        if guess in ["A", "B", "C", "D"]:
            break
        else:
            print("Invalid choice. Please choose A, B, C, or D.")

    # Append valid guess and check the answer
    guesses.append(guess)
    if guess == answers[i]:
        score += 1
        print("Correct!")
    else:
        print("Incorrect!")

print("--------------------------------")
print(f"Final Score: {int(score / len(questions) * 100)}%")
