---
title: Command Line Basics
excerpt: Most of the command line tools you use as a developer (like Git, Node and npm) will **assume that you are in the root directory (i.e. top folder) of your project**. We will cover the main system commands that help up us navigate the file system.
date: '2023-09-07'
status: published
---

**Notice**: The examples below start with a `$`. DO NOT include this when typing commands; it's there to represent the command prompt.

---

<h2>pwd - Present working directory</h2>
Use the `pwd` command to see where you are when you open the terminal.

```
$ pwd
```

The starting directory for most systems will be your home directory.

```
/Users/YOUR-ACCOUNT-NAME
```

Your goal is to navigate to the root of your project. For example:

```
/Users/YOUR-ACCOUNT-NAME/Documents/projects/portfolio
```

---

<h2>ls - List directory contents</h2>
List the contents of your current directory with the ls command:

```
$ ls
```

The `-l` **flag** lists extra information about the contents:

```
$ ls -l
```

Add the `-a` to list hidden files:

```
$ ls -a
```

You can also combine multiple options with a single flag. To list extra information _and_ also all hidden files:

```
$ ls -la
```
---

<h2>mkdir Creates new directory/folder</h2>

```
$ mkdir media
```
mkdir takes in a directory name as an argument, and then creates a new directory in the current working directory. Here we used mkdir to create a new directory named media/.

---

<h2>cd - Change directory</h2>
Use the `cd` command to switch to another directory. Assuming you are currently in your home folder, you can move to your downloads folder with:

```
$ cd Downloads
```

OR, move there from anywhere on the system with an absolute path (replace `username` with your login handle):

```
$ cd /Users/username/Downloads
```

Move up one directory:

```
$ cd ..
```

OR move up many directories

```
$ cd ../../..
```

Move multiple directories "downstream":

```
$ cd some/path/relative/to/your/location
```

Combine `../` with a relative path for more flexibility. To move to a directory that adjacent to your _present working directory`:

```
$ cd ../adjacent-directory-name
```

If you get lost you can always move to your home directory:

```
$ cd
```

<h2>Quality of Life Tips</h2>

- The tab key auto-completes file names and directories.
- Use the Up Arrow to browse through the history of last used commands.
    - Pro tip: type your command first and the Up Arrow will filter the history!

### Extra Reading
- https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line

- https://www.codecademy.com/article/command-line-commands
