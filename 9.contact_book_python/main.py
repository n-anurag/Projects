# define dictionary
contact = {}

while True:

    print("Contacts")
    print("1.Add contact")
    print("2.View contact")
    print("3.Update the contact")
    print("4.Delete contact")
    print("5.Search contact")
    print("6.Count contacts")
    print("7.Exit")

    choice = input("Enter your choice: ")

    if choice == "1":
        name = input("Enter your name:")
        if name in contact:
            print("Contact exist")
        else:
            try:
                age = int(input("Enter your age: "))
                email = input("Enter your email address: ")
                mobile = int(input("Enter your mobile number: "))

                contact[name] = {"age": age, "email": email, "mobile": mobile}
            except ValueError:
                print("Invalid Input")

            print(f"Contact {name} added successfully")

    elif choice == "2":
        name = input("Enter the contact you want to view:")
        if name in contact:
            view_contact = contact[name]
            print(
                f"Name: {name}, Age: {view_contact['age']}, Email: {view_contact['email']}, Mobile: {view_contact['mobile']}"
            )

        else:
            print("contact not found")

    elif choice == "3":
        name = input("Enter the contact you want to update:")
        if name in contact:
            try:
                age = int(input("Enter updated age: "))
                email = input("Enter updated email address: ")
                mobile = int(input("Enter updated mobile number: "))
                contact[name] = {"age": age, "email": email, "mobile": mobile}
                print("contact updated")
            except:
                print("Invalid input")
        else:
            print("contact not found")

    elif choice == "4":
        name = input("Enter contact you want to delete:")
        if name in contact:
            del contact[name]
            print("deleted")
        else:
            print("contact not found")

    elif choice == "5":
        search_name = input("Enter contact you want to search:")
        found = False
        for name, contact_details in contact.items():
            if search_name.lower() in name.lower():
                print(
                    f'Found: {name}, Age: {contact_details["age"]}, Email: {contact_details["email"]}, Mobile: {contact_details["mobile"]}'
                )

                found = True

        if not found:
            print("not found")
    elif choice == "6":
        print(f"you have {len(contact)} contacts")

    elif choice == "7":
        break

    else:
        print("Invalid choice")
