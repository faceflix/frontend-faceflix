# Prerequisites

Before running , make sure you have the following prerequisites installed on your system:

1. Node.js (https://nodejs.org)
2. npm (Node Package Manager, usually installed along with Node.js).
3. [For API with Backend](https://github.com/faceflix/backend-faceflix)

# Installation

To set up the Project, follow these steps:

1. Clone this repository to your local machine.
   example with git clone

```terminal
git clone https://github.com/faceflix/frontend-faceflix.git
```

2. Navigate to the project directory using the terminal.

3. Install the required dependencies by running:

```terminal
npm install
```

4. then start:

```terminal
npm run dev
```

# Alur:

## LoginPage:

- User move to the login page.
- If User don't have an account, users are given the option to move to the register page.

## RegisterPage:

- If user doesn't have an Account, User can fill out the register form with email and password
- If registration is complete, the user will be returned to the login page

## HomePage:

- After successful login, the user will be directed to the main page.
- On the main page, there are several features, including:

  ### Profile

  - Profile Image
  - Profile Video
  - Profile Blog

  ### Edit

  there are edit and sign out buttons

  - If the user clicks on the edit section, they will be directed to the edit page
  - Users can edit their profile information on this page.
  - If the user clicks on the Sign Out section, the user will sign out and return to the login page

## Post Page

- users can post images, videos or blogs by pressing the + button below.

  ### Post Image

- users fill in the title, description, and image file
- If the user does not upload an image then the save button is not active

  ### Post Video

- users fill in the title, description, and video file
- If the user does not upload an video then the save button is not active

  ### Post Blog

- users fill title and description

## Edit Page

- user dapat melakukan edit bagian halaman awal
- Can edit :
  - Name (require)
  - Title (opsional)
  - Description (opsional)
  - Background image (opsional)
  - Profile Image (opsional)
  - email (opsional)
  - password (opsional)
