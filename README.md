# react-rxjs-flow



### Notes to Self: 
  Next Steps:
  --convert all actions to intent

  - render component, hook up logic
  - import CSS
  - push to new repo in upload commit

todo: 
  1. Working React
  2. Unit Tests for data layer
  3. Linter: Complete React TODO; share with Patrick
  4. Split into Angular2, Angular 1.5 Folders








A simple React application using RxJS for data flow.


# Preview of this branch:

![](https://s3.amazonaws.com/f.cl.ly/items/2u3h0J3h1n2A0y3b1U45/Image%202015-04-25%20at%205.57.40%20PM.png)


# Why?

Because after using flux for almost a year, I really dislike it and loathe trying to teach it to others. Seriously, I hate trying to explain how flux/Dispatcher and EventEmitter work each time.

Also because RxJS is the god.


# How?

I'm using Rx.ReplaySubject(1) for now to make sure I only have the latest replay on a subject. This might be stupid, and someone better at reactive programming might have to correct me, but this is just how I'm doing it for now.


# Getting started

Run `npm install` and `npm start`. Webpack will build the assets.

In a new pane, `open index.html`.


# You're wrong because {...}

Send me a tweetstorm ([@jusrin00](http://twitter.com/jusrin00)) or open some issues/submit some PRs.


# Your code is awful/wrong

Please submit PRs! I'll buy anyone who submits a non-spam PR a beer.


# This README sucks

You can help out by submitting a PR.
