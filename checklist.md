# Checklist for Northcoders News Front End

## README - write your own and make sure that it:

- still to do

- [ ] has a link to the deployed version

- [ ] provides general info about your app

- [ ] includes links to your back end repo

- [ ] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)

- [ ] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)

​

## UX

- [ ] Basic styling added

  - you have a good starting point here, things are laid out cleanly and you should be able to layer styling on top without too many problems

  - just a few things to tick off when you start doing this: font, padding in your list cards, link styling, button styles, border / margin around your cards, choosing a colour scheme, use dark / light grey for text depending on background, where the delete button appears, textarea for comment submission

- [ ] Responsive design

  - fine atm though you may wish to consider looking at flex as a way of using more space when your code is wider

- [ ] Items aligned

  - also ok atm but keep an eye on it - make sure things aren't right up against the border of the box they're in.

- [ ] Content legible (not too wide, obstructed, etc)

  - fine at the moment

- [ ] Refreshing doesn’t cause an issue on sub-pages

  - will need checking when deployed

- [ ] No errors in the console

  - fine at the moment, check again before deploying

- [ ] Votes / Posts / Deletions happen instantly _OR_ give user indication of loading

  - voting is fine, but nothing obvious when posting comment. Deleting is good, but you don't need the alert!

## Functionality

### Login

- [x] Some indication of who is logged in

  - need this advertised in the nav somewhere

### Articles

- [x] Serves all articles / top articles

- [x] Can vote on articles

  - yes, but it looks like both upvote and downvote make it go up!

- [x] Can vote a maximum of once in either direction per page load

  - yes, this works quite neatly! But it would be good if you could cancel your vote too...

- [x] Votes are persistent when page is refreshed

  - see above

- [x] Topic pages load only relevant articles (especially when navigating from one topic page to another)

  - great

- [x] Can sort articles by date created / comment_count / votes

  - also good, well done!

### Individual Article / Comments

- [x] Individual articles are served with comments

  - yep nice and clear

- [x] Can vote on comments

  - same issue as articles

- [x] Can vote a maximum of once in either direction per page load

  - and again

- [x] Votes are persistent when page is refreshed

  - and again

- [ ] Can post new comments, which are persistent

  - yes, but the comments don't appear immediately which is a problem. You need to alter state to include the new comment after posting it.

- [x] Can only delete comments of logged in user

  - seems good

- [x] Deleted comments don’t re-appear on re-render/refresh

  - nice one!

## Error Handling

- [ ] Bad url

  - not yet handled

- [ ] Bad topic slug in url

  - not yet handled (fetches everything)

- [ ] Bad article id in url

  - not yet handled

- [ ] Post comment: (No text in comment body / Can you post without logging in?)

  - easy fix: use `required` attribute on the form's textarea.

## Code

- A note on the directory structure - your actual app is nested inside your repo. Make sure everything is up at top level - could cause issues with deployments or confuse those reading your code.

- [x] Well named components

  - yep, easy to find everything!

- [x] Functional components used where possible

  - seems good

- [ ] Components reused where possible (`Articles` / `Voter`...)

  - `VoteHandler` is great, just needs a little fix for the problems described earlier. Also good to see `Sort` / `ArticleList` handling both of those routes. The way you use `ArticleCard` in the list is problematic - you are treating the component just as a function. It will work but could cause problems with optimising rendering and extending down from that branch in the future. Make sure you use JSX (i.e. `<ArticleCard />`) for anything that's a component.

- [x] Minimal state - don't hold derivable data in state

  - can't see any problems here.

- [ ] Set state correctly, using previous state where possible

  - just a quick note on `DeleteComment` - the way you hide the comment could cause problems, because you hide the comment even if there is an error. When you write something like `.then(hideComment());` the hiding will actually happen before you get to the `then` block. That's because what you are passing to `then` should be a callback function, so your function will be evaluated in order to see what is passed to `then`. You need something like `.then(() => hideComment());` or even `.then(hideComment);` - either way, it's a function.

- [x] Handle asynchronicity clearly (i.e. isLoading pattern)

  - seems pretty good

- [ ] Functions are DRY (`handleChange` for controlled components / api calls)

  - mainly good, but could you change your handlers in the `Sort` component so you just use one?

- [ ] Use object destructuring where possible

  - mainly good again but do try to be entirely consistent (i.e. `VoteHandler`)

- [ ] Tidy? If not: ESLint / Prettier

  - not bad, just turning Format on Save on in the settings should tidy stuff up a bit?

- [x] `node_modules` git ignored

- [x] No `console.log`s / comments

  - well done for keeping things tidy as you go.

- [x] remove unnecessary files (e.g. App.test.js)

  - have a check for these :)

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END

## Once everything else is complete, here are some extra challenges:

- [ ] Use `aXe` extension to check for a11y issues

- [ ] Make sure any pure functions are extracted and tested with `Jest`

- [ ] Add integration tests with `cypress`

- [ ] Use Context API for sharing logged in user amongst components
