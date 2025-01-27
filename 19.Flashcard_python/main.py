import json 
import os

FlASHCARD_FILE = "flashcards.json"

def load_flashcards():
    if os.path.exists(FlASHCARD_FILE):
        with open(FlASHCARD_FILE , 'r') as file:
            try:
                return json.load(file)
            except json.load(file) or {} :
                print("Error loading flashcards")
                return {}

def save_flashcards(flashcards):
    with open(FlASHCARD_FILE , 'w') as file:
        json.dump(FlASHCARD_FILE , file, indent=4)
    

def add_flashcards(flashcards):
    with open(FlASHCARD_FILE , 'w') as file:
        word = input("Enter word:").strip()
        meaning = input("Enter meaning:").strip()

        if word in flashcards:
            print("Word already exists")
           

        else:
            flashcards[word] = meaning
            print("Word added successfully")

        save_flashcards(flashcards)

def view_flashcards(flashcards):
    if not flashcards:
        print("No flashcards found")        
    else:
        for word,meaning in flashcards.items():
            print(f"{word}:{meaning}") 
        print()

def main():
    flashcards = load_flashcards()
    while True:
        print("1. Adding the Flashcards")
        print("2. Viewing flashcards")
        print("3. exit")
        choice = input("Choose an option")
        if choice == "1":
            add_flashcards(flashcards)
        if choice == "2":
            view_flashcards(flashcards)    
        if choice == "3":
            break
        else:
            print("Invalid choice")

if __name__ == "__main__":
    main()

        

