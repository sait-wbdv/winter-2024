# Git and Git Conflict
## Resolving Git Conflicts

---

### Refresher: How does git work?

A typical sequence of events in a developer's day, they:
1. Will make changes to code on their local repo;
2. `add` the changes to "staging";
3. `commit` the changes to save a "snapshot" of the project;
4. `push` the changes to a Remote Repo (i.e. GitHub) when the changes are ready to be shared or deployed.
    - You must `pull` any new changes from the Remote Repo before you can `push`. This is when dreaded merge conflicts need to be handled.
    - At any point during development, you can view the status of your repo to find helpful information of the status of your project

---

### A Diagram: How Git flows work

![](/images/slides/cpnt-201/git-workflows-2.png)

---

### What Are Git Conflicts?

- Git conflicts happens when changes in different source code environment or branches cannot be merged automatically.
    -  When local changes are not up to date with remote repositories especially when changes are made on the same line of code.

    ***OR***

    - when a version of a file has been submitted is newer than the version of the file you have started to base your changes on.

- It usually occurs during a pull or merge operation.

```
$ git pull
> Auto-merging example.md
> CONFLICT (content): Merge conflict in example.md
> Automatic merge failed; fix conflicts and then commit the result

```
---

### Git Terminologies
<dl>
	<dt>Pull</dt>
	<dd>Used to fetch and integrate changes from a remote repository into the current branch. It combines git fetch and git merge. It is mostly used to update a local branch with changes that have been made in the corresponding branch on the remote repository. </dd>
	<dt>Merge</dt>
	<dd>When two branches in Git are merged into one. This will often happen if two developers are submitted code to a project or one developer is submitting code from two machines.</dd>
	<dt>Merge conflict</dt>
	<dd>When two branches edit the same line of code. Git doesn't know which change to keep so it leaves it to the developer to decide when remote code is pulled.</dd>
	<dt>Current Change</dt>
	<dd>The change (relevant to the conflict) that was made on the local repo.</dd>
	<dt>Incoming Change</dt>
	<dd>The change that is incoming from the remote repo.</dd>
</dl>

---

### Common Causes of Git Conflicts?

- Simultaneous changes to the same line of code. 
    - When two separate branches have made edits to the same line in a file, 
        
        **OR**

    - When a file has been deleted in one branch but edited in the other

- Conflicting changes in different branches or location of source code ( e.g. local vs remote).

---

### Resolving Git conflicts

**Step 1: Identify Conflicts**

- Conflicts occur when Git cannot automatically merge changes from different branches.

- When you encounter a conflict, Git marks the conflicted files and provides information about the conflicting changes.

**Step 2: Open Conflicted File**

- Open the conflicted file(s) in your code editor. Git adds conflict markers to indicate the conflicting sections.

```
<<<<<<< HEAD
// Changes from the current branch
=======
// Changes from the incoming branch
>>>>>>> incoming-branch

```
---


### Resolving Git conflicts continued...

**Step 3: Manually Resolve Conflicts**

- Review the conflicting sections marked by <<<<<<<, =======, and >>>>>>>.

- Decide which changes to keep or combine the changes.

- Remove the conflict markers and unnecessary lines.

![](/images/slides/cpnt-201/git-conflict-vscode.png)

**Step 4: Mark as Resolved**

```
git add <conflicted-file>

```

---




### Resolving Git conflicts continued...

**Step 5: Commit Changes**

- Complete the merge process by committing the resolved changes.

```
git commit

```

**Step 6: Verify Resolution**

- Check that all conflicts are resolved by running:

- If resolved, the working directory should be clean.

```
git status

```

---

### Additional tips

- Git provides merge tools to visually resolve conflicts.  
```git mergetool```

- f you encounter issues while resolving conflicts, you can abort the merge and start over. Use ``` git merge --abort```

- To minimize conflicts, regularly pull changes from the remote repository before making your own changes.

---

### Best practices for Git conflicts

- Regularly pull changes from the remote repository.

- Communicate with team members about ongoing work.

- Create feature branches to isolate changes.

- Resolve conflicts as soon as they arise.

---

### Key Takeaways

- Git conflicts can happen when changes cannot be automatically merged or pulled in.

- Understanding and resolving git conflicts is crucial for smooth collaboration between team members.

- You can also experience git conflicts if you make a change in a remote repository(e.g GitHub repo directly) and then try to pull the changes into your local repository.

- Git conflicts can become messy so you want to apply best practices to your daily workflow.

