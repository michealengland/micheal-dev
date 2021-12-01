---
title: Writing Better Pull Requests
date: '2021-11-30-T17:00:00Z'
tags: []
---

# Writing Better Pull Requests
Over the last year, I've become a lot more thoughtful about the code I write and how to work on features. A tremendous soft skill that I've been working on is optimizing how I write my pull requests. This skill not only makes your code more approachable, but it helps others become more knowledgeable about the code base even if they were not involved directly.

## Recognizing Difficult PRs
The path to writing better PRs starts with being able recognize the difficult ones. Here are some of the key identifiers I look for:

- Overwhelming amounts of changes
- Little to no documentation
- Large commits with many changes
- Poor commit messages

## Advantages of a well written PRs
A well written PR will impact the past, present, and future codebase that your project utilizes. Here are some of the advantages of a well written PR.

- Reduce time for reviews! Your reviewers will thank you for making their lives easier
- Reduce cognitive load
- Educate co-workers on your team and outside of your team on how something works
- Reduce code oversights and bugs
- Serve as a refresher after the PR has been merged or become stale
- A great resource when writing documentation

## PR Writing Checklist
Here are some of the features I make sure to include when writing every PR. Over time these become a habit and the time investment needed is much less.

### Descriptive Titles
Write a descriptive title with good keywords for future search-ability.

### Helpful Resources
Make sure to include the link to the issue or any additional resources a reviewer may need to reference. I typically like to include an issue link at the very top of the PR.

### PR Description
Document the change you're introducing and explain why. This could be as simple as listing off some features you're introducing and re-stating the the problem you're solving. The description should give the reviewer a clear idea of the big picture along with key updates. You do not need to write a novel.

### Testing Environment
If additional setup is required such as setting up an API key, or modifying the dev environment in any way, include a section for it. This section can also be useful for sharing staging or production configuration details.

### How to Test Steps
Providing easy to follow along testing steps will make your code changes easier to verify for reviewers of all skill levels and familiarity. It's important to remember testing steps serves as documentation for what you **did** and **did not** test for. This can be helpful for highlighting edge-cases you didn't consider.

_I typically write testing steps as I'm verify the before setting a PR as "ready for review". I also like to include additional resources such as a test branch, images, videos, and gifs as needed._

### Screen Captures and Supporting Visuals
Include visual elements such as screen captures, gifs, and sometimes videos with a short description. Sharing these resources helps the visual aspect and makes it more obvious the reviewer should expect to see.

_I frequently share before and after screen captures with a brief description when possible. This helps breakup large amounts of content too!_

### Visual hierarchy
Using appropriate headings, dividers, and other content components to reduce reader fatigue.

_I typically go for skim-ability. The more obvious the structure, the quicker the reviewer can locate what t they need to reference while testing._

### Small Commits
Utilizing small commits with meaningful descriptions can be incredibly helpful for yourself and reviewers. Here are some reason why:

- Some reviewers prefer to step through commits to get the bigger picture
- Small commits make the history easy to alter with `rebase` or `cherry-picking`
- Detailed commit descriptions serve as resource for explaining code complex choice in the PR as well as commit history

_I recommend writing full commits using `git commit` instead of the message inline `git commit -m "message"`. To make this easier, you can [write your commit message using your code editor of choice](https://salferrarello.com/git-commit-message-editor/) and use [git preview changes in commit message](https://salferrarello.com/git-preview-changes-in-commit-message/). These two features combined will make aid greatly in writing clean and focused commits!._

### Make sure your PR is focused
The smaller a PR is, the easier it will be for a reviewer to stay focused. Consider the amount of thought needed for 1 line change PR and a 50+ file PR. Which one are you more likely to review immediately? Which one are you less likely overlook an unwanted code change or bug? Keeping a PR streamlined only to specific goals is an art form which will play a huge role in getting reviewers onboarded. If there are features that can be broken out into smaller PRs, the time in saved reviewing can be worth it.

_I prefer to break up large PRs by using a primary feature branch and then merging much smaller PRs into it. Once all of the pieces have been merged, the overall approval is much easier since we trust the code up to this point. Previous PRs are also great resources for documenting the changes on the large PR._

### Don't forget the little things
- Check spelling and grammar, write PRs in a program with spellcheck if needed
- Use formatting elements such as **bold**, _italic_, ~~strike through~~, and `backticks` etc, ...
- Add comments on the code lines if needed to explain a decision or ask questions
- Always re-read and verify the testing steps
- Don't assume! Use a language that speaks to your audience and their skill level

I hope you found this helpful, as following these steps has greatly reduced the quality and amount of time my PRs hangout before they get reviewed.
