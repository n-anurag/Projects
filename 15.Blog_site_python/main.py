# Blog Site CLI

# Function to view all posts
def view_posts():
    try:
        with open("blog_data.txt", "r") as file:
            posts = file.read()
        if posts.strip():
            print("\n--- Blog Posts ---")
            print(posts)
        else:
            print("\nNo posts available.")
    except FileNotFoundError:
        print("\nNo posts available. Start by adding a post.")

# Function to add a new post
def add_post():
    title = input("Enter Title: ").strip()
    content = input("Enter Content: ").strip()

    # Generate a unique ID
    last_id = 0
    try:
        with open("blog_data.txt", "r") as file:
            lines = file.readlines()
            for line in reversed(lines):
                if line.startswith("ID:"):
                    try:
                        last_id = int(line.split(": ")[1])
                        break
                    except ValueError:
                        continue  # Skip invalid lines
    except FileNotFoundError:
        print("File not found. Creating a new one.")

    new_id = last_id + 1

    # Write the new post to the file
    with open("blog_data.txt", "a") as file:
        file.write(f"ID: {new_id}\n")
        file.write(f"Title: {title}\n")
        file.write(f"Content: {content}\n")
        file.write("---\n")

    print("\nPost added successfully!")


# Function to edit a post
def edit_post():
    post_id = input("Enter the post ID to edit: ").strip()

    try:
        with open("blog_data.txt", "r") as file:
            posts = file.read().split("---\n")

        updated_posts = []
        post_found = False

        for post in posts:
            if post.strip() and post.startswith(f"ID: {post_id}"):
                post_found = True
                title = input("Enter the new title: ").strip()
                content = input("Enter the new content: ").strip()
                updated_posts.append(f"ID: {post_id}\nTitle: {title}\nContent: {content}")
            elif post.strip():
                updated_posts.append(post.strip())

        if post_found:
            with open("blog_data.txt", "w") as file:
                file.write("\n---\n".join(updated_posts) + "\n---\n")
            print("\nPost updated successfully!")
        else:
            print("\nPost not found.")
    except FileNotFoundError:
        print("\nNo posts available.")

# Function to delete a post
def delete_post():
    post_id = input("Enter the post ID to delete: ").strip()

    try:
        with open("blog_data.txt", "r") as file:
            posts = file.read().split("---\n")

        updated_posts = []
        post_found = False

        for post in posts:
            if post.strip() and not post.startswith(f"ID: {post_id}"):
                updated_posts.append(post.strip())
            elif post.strip():
                post_found = True

        if post_found:
            with open("blog_data.txt", "w") as file:
                file.write("\n---\n".join(updated_posts) + "\n---\n")
            print("\nPost deleted successfully!")
        else:
            print("\nPost not found.")
    except FileNotFoundError:
        print("\nNo posts available.")

# Main menu
def main():
    while True:
        print("\nBlog Site - Command Line Interface")
        print("1. View Posts")
        print("2. Add Post")
        print("3. Edit Post")
        print("4. Delete Post")
        print("5. Exit")

        choice = input("Enter your choice: ").strip()

        if choice == "1":
            view_posts()
        elif choice == "2":
            add_post()
        elif choice == "3":
            edit_post()
        elif choice == "4":
            delete_post()
        elif choice == "5":
            print("\nExiting the blog site. Goodbye!")
            break
        else:
            print("\nInvalid choice. Please try again.")

if __name__ == "__main__":
    main()
