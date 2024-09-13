# Local Business Cafe

This is a second project in 'Front-End PLUSS' learning path with Learning People. Task was to create fully functional website for a local (imagined) cafe using HTML, CSS and JavaScript.

## Short description

I created website for the Pythagorean cafe. It's a nice and cosy place in Blackrock, Co Dublin, established in 2024. They offer standard things that you would expect to see on a menu in any cafe with a little twist. Design was kept in a minimalist style - few collors and images (where it seems appropriate), but nothing overly bright.

Website contains several web pages:

- **Home page** - here you will find some images from premises and an invite to explore what we have on offer
- **About page** - a little history of how we came about and some info about events that are hosted in cafe
- **Menu page** - for customers who wish to prepare before the visit
- **Shop page** - place where to get some nice merch or gifts
- **Contact page** laying out how to find us and get in touch.

## Tools

In developement of the website I tried to use several tools that I have covered so far in my learning journey:

- **HTML** is a sceleton for all the pages on the website.
- **CSS** for styling of all the elements.
- **JavaScript** is used to make webpage interactive and show pop-up screen when it is intended.
- **Bootstrap** I have used bootstrap elements on several pages. On the menu page to display tabs of Drinks/Foods and create 'carousel' on the home page.
- **Handlebars** To create product cards in a 'Shop'
- **Copilot AI** helped me to come up with information for the About page.
- **Images** was sourced from https://unsplash.com/

## What Pythagor cafe website do?

There are several interactive element on the website

- Navigation bar on the top-right corner (big screens) or in the middle (small screens)
- On Home page carousel will change it's picture after an interval (if the cursour is not hovering over it) and also buttons on the side can be used to change images
- Menu page consists of 2 tabs that can be changed back and forth (Beverages & Food)
- On shop page we have the most interactivity possible. Each card has 2 buttons to increase or decrease how many items we want to buy. When button 'To Checkout' (bottom-right corner) is pressed, a pop-up screen will apear that will walk you through the checkout procedure or with a message that nothing was selected.
- On Contact page I have inserted a google map with Pythagorean cafe location (just please don't come looking for it, it's imaginary). Here we also have a contact form that is validated for an input (all fields must be filled). When button 'Submit' is clicked either we a missing field will be higlighted (default behaviour) or we will see a pop-up screen.

## What's not here

In this project is only the front-end of the website. For a full website there would still be some things to implement:

- User input checks on contact page
- User input checks on the checkout pop-up from the shop page
- Enforcing on providing all mandatory field in the checkout pop-up (currently it allows to submit it empty, would be disaster in a real workd production scenario)

## How to run it?

To run Pythagorean Cafe project on your computer follow the steps:

- Download repo from github
- Extract it and open with a code editor (I use Visual Studio Code)
- Run it with 'Live Server'

## Deployment

A version of the website is deployed using github pages.
To visit my Local Cafe page <a href="https://r-janovskis.github.io/localcafe/" target="_blank">click here</a>.
