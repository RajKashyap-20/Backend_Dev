git init : Initialize a new Git repository in the current folder.

git clone: Copy an existing GitHub repository to local system.

git status : Check the current status of files (tracked, untracked, staged).

git add : Add files to staging area.
Command (single file): git add file.txt
Command (all files): git add .

git commit : Save staged changes with a message.
Command: git commit -m "message"

git log : View commit history.

git diff : Show differences between working directory and last commit.

git branch
Use: List all branches.

git branch <branch_name>
Use: Create a new branch.

git checkout <branch_name>
Use: Switch to another branch.

git checkout -b <branch_name>
Use: Create and switch to a new branch.

git merge <branch_name>
Use: Merge specified branch into current branch.

git reset <file_name>
Use: Remove file from staging area.

git checkout -- <file_name>
Use: Discard changes in a file.

git revert <commit_id>
Use: Undo a commit safely.

git config --global user.name "Your Name"
Use: Set Git username.

git config --global user.email "email@example.com
"
Use: Set Git email.