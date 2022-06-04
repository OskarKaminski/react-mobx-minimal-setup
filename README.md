# React & Mobx - minimal setup

This is a minimal setup for applications, that would like to utilize react with a fast, reliable, and scalable solution for state management.

## Getting started
As usual, run:
1. `npm i`
1. `npm start`

And enjoy coding.

## What is part of this repo?
This repo comes with a simple counter, that gets incremented after clicking on it.
It demonstrates how react works with mobx together, and sets you up for fast development of your app.

## Decorators

This project uses decorators that are an experimental feature. Decorators are officially supported by Mobx and a default way to go. They make your code simplier by isolating abstraction with for example boxing your primitives.

There are also starters that prevents developers from using decorators like [Create react app](https://facebook.github.io/create-react-app/docs/can-i-use-decorators).

I don't fancy this kind of starters because I don't need another parents to set me constraints on what I can use. 

Do you?

## Why not redux?

I've worked 3 years with redux as for now, and I prefer Mobx over redux for sake of simplicity.
Working with redux I appointed multiple problems coming from its architecture decisions, and there were no good solutions for them.

Mobx has a lower learning curve, there is less boilerplate and it doesn't require changing the architecture of your application.

## Contribute

Feel free to propose your changes in the Pull Requests. I'm usually very responsive.
