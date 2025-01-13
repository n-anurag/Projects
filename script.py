import os
import subprocess

# GitHub username
USERNAME = "n-anurag"

# Parent folder containing all projects
PARENT_FOLDER = r"D:\Projects"

def add_to_github(project_name):
    # Full path to the project folder
    project_path = os.path.join(PARENT_FOLDER, project_name)
    os.chdir(project_path)  # Change directory to the project folder

     # If it's already a Git repository, update changes
    subprocess.run(["git", "add", "."])  # Add all files
    subprocess.run(["git", "commit", "-m", "Updated project"])  # Commit changes
    subprocess.run(["git", "push"])  # Push updates to GitHub
    print(f"Project {project_name} updated on GitHub.")

def main():
    # Specify the subfolder you want to push
    project_name = "2.Hello_world_react"  # Change this for each subfolder
    add_to_github(project_name)

if __name__ == "__main__":
    main()
