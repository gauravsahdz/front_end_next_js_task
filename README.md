# Web App Documentation

This documentation provides information on how to set up and run the web app made using Next.js, Tailwind CSS, and the FakeStoreAPI.

## Prerequisites

Before running the code locally, make sure you have the following installed:

- Node.js (v18.16 or higher)
- Next.js (v13.15 or higher)

## Deployment

The web app is deployed on Vercel and can be accessed using the following link:

[https://online-store-gauravsahdz.vercel.app/](https://online-store-gauravsahdz.vercel.app/)

## Installation

To install the web app, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/gauravsahdz/front_end_next_js_task.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Running the App

To run the web app locally, use the following command:

    ```bash
    npm run dev
    ```

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [FakeStoreAPI](https://fakestoreapi.com/)

## Pages

The web app has the following pages:

- Home Page
  - You'll find a nice looking Hero section with a search bar and a list of products.
  - The home page shows a list of products with their images, names, and prices.
- Search Page:
  - The search page allows you to search for products by name just by typing in the search bar.
- Product Details Page
  - The product details page shows the details of a particular product.
  - It also allows you to add the product to the cart.
  - The page also shows the related products.
- Cart Page
  - The cart page shows the products that have been added to the cart.
  - You can increase or decrease the quantity of the products in the cart.
  - You can also remove products from the cart.
  - The total price of the products in the cart is also displayed.

## Bonus Points

The following bonus points have been implemented:

- Responsive UI
- Loading and error states during data fetching
- Shopping cart functionality
- Login functionality (using google authentication and next-auth)

Assignment Description:

In this assignment, you will create a basic e-commerce application using Next.js. You'll apply key Next concepts and fundamental web development skills. Your task is to develop a multi-page web application named "OnlineStore" that allows users to browse and search for products.

**Instructions: **Fork the provided project repository to your profile and clone it to your machine to begin the project. Design and implement a web application named "OnlineStore" that allows users to browse and search for products. The application should have the following pages: Home Page: Display a list of products with their images, names, and prices. Fetch the list from the provided API endpoint. Search Page: Include a search bar where users can input the name of a product. On form submission, display a list of search results (products) fetched from the API endpoint. Product Details Page: When a user clicks on a product from the search results or product list, they should be redirected to a page that displays detailed information about the product, including the product image, name, price, and description. You can fetch data using the following API endpoint: https://fakestoreapi.com/

Requirements: Use Next.js (v13 i.e. app folder) to create the web application. (Typescript MUST be used) Create a visually appealing UI using any CSS framework (like Bootstrap, and Tailwind CSS). Use react query (Tanstack query) for fetching and caching the API data. Use of global state management with Redux toolkit, Recoil or any other state management library. Write clean, maintainable, and well-documented code. Use Git for version control, committing your code regularly to the forked Git repository in your profile. Deploy the application to a hosting platform (e.g., Vercel, Netlify) and provide a live demo URL in your repo and the submission form.

Bonus Points: Implement a responsive UI to improve user experience on mobile devices. Handle loading and error states during data fetching. Add a shopping cart functionality where users can add products to the cart and view the cart. Submission Guidelines: Fork this GitHub repository Assignment Repo to your own GitHub account.

Commit your code regularly and push the changes to your forked repository.

Do not create a pull request; just submit your forked repository.

Provide a DOCS.md file with all the technologies used and how to run the program locally.

Once you have completed the assignment, share the repository URL with us via the submission form.

Join this discord server to get an update: Join Here

Submission Deadline: Task Submission: 2023/12/27 02:30 PM Check out the discussion section of this repo to ask any related queries or doubts. Link: https://forms.gle/AuFqnzW32uEzEaAr8

Note: The assignment is intentionally challenging so do your best ;) . Don't hesitate to ask for any clarifications in the discussion section of this repo. Good luck with your assignment!
