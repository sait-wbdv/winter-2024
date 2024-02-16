
# Git Workflows
## Collaborating with a Team

---

## Why do we use Git?
- **Clone 3rd party projects**: Popular projects include [lodash](https://lodash.com/), [TailwindCSS](https://tailwindcss.com/) and [Font Awesome](https://fontawesome.com/).
- **Code backups**: Rollback to your last `commit` in case you screw up.
- **Syncing code**: A single dev can sync projects across multiple machines.
- **Deployment**: `push` project code to a server to make it live (with a little help from GitHub).
- **Collaboration with teammates**: Teams can coordinate work, review code and manage  conflicts.

---

## Terminology
<dl>
  <dt>(Merge) Conflict</dt>
  <dd>When one (on two machines) or more developers make changes to the same line of code.</dd>
  <dt>Branch</dt>
  <dd>An alternate version of your code. Each version lives in the same location in the file system but Git re-writes your files based on what Branch you're in.</dd>
  <dt>Pull Request</dt>
  <dd>A fancy-pants GitHub (not Git) feature for reviewing code contributions in large/untrusted teams.</dd>
</dl>

---

## 3 Collaboration Workflows
### In order of increasing fanciness
1. **Not fancy**: The whole team pushes to the `main` branch;
2. **Kinda fancy**: Each dev commits to their own branch(es);
3. **Fancy-pants**: Each dev submits Pull Requests.

---

### Workflow 1: Not Fancy
## Everyone commits to `main`
1. An Owner creates a team repo;
2. The Owner adds each team member to the repo as a Collaborator;
3. All team members push commits directly to the `main` Branch;
4. The last dev to push resolves any conflicts.

---

### Workflow 2: Kind Fancy
## Everyone commits to a branch
1. Steps 1 & 2 from last slide;
2. Each team member creates a branch for their features:
    ```
    $ git checkout -b [feature-name]
    ```
3. The dev commits code to their branch until it's to be added to the main branch;
4. Once the feature is ready, the branch is merged into `main` and conflicts are resolved.
    ```
    $ git checkout main
    $ git merge [feature-name]
    ```

---

### Workflow 3: Fancy-pants
## Devs submit Pull Requests
See [About Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) on GitHub
1. Team members are NOT added as collaborators;
2. Each dev [forks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) and clones the project repo;
3. Work is done in a local feature branch on the fork;
4. Changes are pushed to their fork on GitHub;
5. A Pull Request is submitted for the Owner to accept after conflicts are resolved.

---

## Git Stash
- Stashing your work is like clipboard on steroids: it takes all the changes in your working copy and saves them for you on a new clipboard. 

- You can always restore the changes from that clipboard in your working copy 

- No limit to how many stashes you can have. Also, a Stash is not bound to the branch where you created it: when you restore it, the changes will be applied to your current HEAD branch, whichever this may be.

---

## When to use Git stash

- before checking out a different branch.

- before pulling remote changes.

- before merging or rebasing a branch.

---

## Git Branch Real Case scenarios

**Feature Development**

***Scenario:*** A team of developers, including Sarah (front-end developer), John (back-end developer), and Emily (QA tester), is working on a web application. They need to implement a new feature that involves significant changes to the codebase.

***Use of Branching:*** Sarah creates a feature branch named "user-authentication" from the main development branch. John creates another feature branch named "database-integration" for the backend changes. Emily sets up a testing environment linked to the feature branches. Each developer works on their respective branches, making changes, committing them, and pushing them to the remote repository. Once the features are completed and tested, they are merged back into the main branch through pull requests.

---

## Git Branch Real Case scenarios 2

**Bug Fixing**

***Scenario:*** A critical bug is discovered in the production environment, impacting the user experience. The team, including Mark (software engineer) and Lisa (QA tester), needs to address the bug urgently without disrupting ongoing development work.

***Use of Branching:*** Mark creates a hotfix branch named "bug-fix" from the production branch to address the critical bug. He makes the necessary changes and commits them to the hotfix branch. Lisa conducts testing on the hotfix branch to ensure that the bug is resolved. Once the hotfix is verified, it is merged into both the production branch and any active development branches to ensure that the fix is applied universally.
---


## Git Branch Real Case scenarios 3

**Release Management**

***Scenario:*** A software company is preparing for a new release of their product. The team, including Alex (project manager) and Kate (technical writer), needs to stabilize the codebase, conduct final testing, and prepare release notes.

***Use of Branching:***  Alex creates a release branch named "release-2.0" from the main development branch to isolate the code changes for the upcoming release. Developers focus on stabilizing the release branch by fixing bugs, addressing last-minute issues, and updating documentation. Kate works on preparing release notes and documentation based on the changes in the release branch. Once the release is ready, it is merged into the production branch to deploy the new version.

---

## Git Branch Real Case scenarios 4

**Experimentation and Prototyping**

***Scenario:*** A team, including Mike (software architect) and Rachel (UX designer), wants to experiment with new features or explore alternative solutions without impacting the stability of the main codebase.

***Use of Branching:*** Mike and Rachel create experimental branches to prototype new features, test different implementations, or explore innovative ideas. These branches allow them to work independently on experimental features without affecting the main development workflow. Depending on the outcome of the experiments, changes may be integrated into the main codebase or discarded.

---


## Git Branch Real Case scenarios 5

**Code Review and Collaboration**

***Scenario:*** Multiple developers, including David (team lead) and Jessica (junior developer), are working on different parts of a project concurrently. They need a structured way to review each other's code, provide feedback, and collaborate effectively.

***Use of Branching:*** Each developer creates a feature branch for the task they are working on. Once the feature is ready, they open a pull request, allowing team members to review the changes, provide feedback, and suggest improvements. David oversees the code review process, ensuring that changes are thoroughly reviewed before being merged into the main codebase.

---
## Lets play a git branch game

https://learngitbranching.js.org/

