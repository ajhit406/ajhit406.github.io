---
layout: post
title: My Git Workflow
---

This post is mostly meant as a reference to myself for future contributions to my projects. The following is meant for a feature-based git workflow using branches.

### Create a new feature branch:

```
  git checkout -b new-branch
```

### Work on branch, &amp; commit changes regularly:

```
  git stage -p
  git commit -m ‘commit message’
```

### Push remote branch regularly:

```
  git push origin new-branch
```

### Checkout master, get upstream updates:

```
  git checkout master
  git pull --rebase
```

This last `git pull --rebase` will get you all new branches. To only pull from master, type:

```
  git pull --rebase origin master
```

### Checkout feature branch and rebase master:

```
  git checkout new-branch
  git rebase master
```

### Force push new git history to remote branch:

```
  git push -f origin org-signup
```

### Go to GitHub and make a pull request:

* Switch to your branch on [GitHub](https://www.github.com):

![Pick Branch](/images/pick-branch.png)

* Click the Compare & Review button:

![Start PR](/images/pr-start.png)

* Review the PR changes and add a description of the PR

![Review PR](/images/pr-review.png)

* Create the PR

![Create PR](/images/pr-create.png)

### Delete Local Branch:

```
  $ git branch -D new-branch
  Deleted branch new-branch (was 83efg8h).
  Note: The uppercase -D option is a shortcut for --delete --force. If you want to delete a local branch that must be fully merged in its upstream branch, use -d which is a shortcut for --delete.
```

### Delete upstream (remote) branch:

```
  git push origin --delete new-branch
```

This option was added in [Git v1.5.0](https://github.com/gitster/git/blob/master/Documentation/RelNotes/1.5.0.txt), and is a more verbose alternative to:

```
  git push origin :new-branch
```
