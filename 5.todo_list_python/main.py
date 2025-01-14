def task():
    tasks = []

    # Get the total number of tasks to enter
    total_task = int(input("How many tasks do you want to enter? "))
    for i in range(1, total_task + 1):
        user_task = input(f"Enter task {i}: ")
        # Add task to the list
        tasks.append(user_task)
        print("Tasks:", tasks)

    while True:
        # Menu for operations
        print("\nOperations:")
        print("1. Add task to the list")
        print("2. Update a task")
        print("3. Delete a task")
        print("4. View all tasks")
        print("5. Exit")
        operations = input("Enter operation: ")

        if operations == "1":
            # Add a new task
            add_task = input("Enter the task to add: ")
            tasks.append(add_task)
            print("Tasks:", tasks)

        elif operations == "2":
            # Update an existing task
            updated_val = input("Which task do you want to update? ")
            if updated_val in tasks:
                up = input("Enter the new task: ")
                index = tasks.index(updated_val)
                tasks[index] = up
                print("Updated task list:", tasks)
            else:
                print(f"Task '{updated_val}' not found in the list.")

        elif operations == "3":
            # Delete a task
            del_task = input("Enter the task to delete: ")
            if del_task in tasks:
                tasks.remove(del_task)
                print("Task deleted.")
                print("Updated tasks:", tasks)
            else:
                print(f"Task '{del_task}' not found in the list.")

        elif operations == "4":
            # View all tasks
            print("Total Tasks:", tasks)

        elif operations == "5":
            print("Exiting the program")
            break

        else:
            print("Invalid operation. Please choose a valid option.")


# Call the function
task()
