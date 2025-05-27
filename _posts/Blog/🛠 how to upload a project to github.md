---
title: 🛠 how to upload a project to github
date: 2024-04-29
tags:
  - github
  - programmation
status: 📌
public_notes: true
public_note: true
public_note1: true
---

## Useful Commands

1. `git init`
2. `git add .`
3. `git add <file name>`
4. `git commit -m "Commit message"`
5. `git remote add origin https://github.com/your_username/your_project.git`
6. `git push -u origin main`
7. `git push`

## Steps

1. Create a repository on GitHub:
	- Log in to GitHub and create a new repository with a name and description.
    - Set the visibility (public or private) and create the empty repository.
2. Initialize Git in your project:
    - Open a terminal and navigate to the project's root folder.
    - Execute `git init` to initialize Git.
3. Add files to the repository:
    - Use `git add .` to add all pending changes to the staging area.
    - You can use `git add <file name>` to add specific files.
4. Commit the changes:
    - Execute `git commit -m "Commit message"` with a descriptive message.
5. Connect your local repository with GitHub:
    - Add the remote GitHub address with `git remote add origin <GitHub repository address>`.
6. Push the changes to GitHub:
    - Use `git push -u origin main` to upload the changes to the "main" branch on GitHub.
7. Verify on GitHub

