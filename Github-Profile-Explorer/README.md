# **GitHub Explorer**

GitHub Explorer is a web application that allows users to search for GitHub profiles and view their repositories. It fetches data from the GitHub API and displays it in an intuitive and user-friendly interface.

---

## **Features**
- Search for GitHub users by username.
- Display user profile details, including:
  - Avatar
  - Name
  - Bio
  - Followers and following count
  - Public repositories count
- Show a list of repositories with:
  - Repository name
  - Description
  - Stars and forks count
- Light/Dark mode toggle for better user experience.
- Error handling for invalid usernames or API issues.

---

## **Technologies Used**
- **HTML**: For structuring the web page.
- **CSS**: For styling the application.
- **JavaScript**: For fetching data from the GitHub API and dynamically updating the DOM.
- **GitHub API**: To fetch user and repository data.
- **.env**: To securely store the API key.
- **.gitignore**: To exclude sensitive files from version control.

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/github-explorer.git
cd github-explorer
```

### **2. Install Dependencies**
If you're using a build tool like Vite, install the required dependencies:
```bash
npm install
```

### **3. Add Your API Key**
1. Create a .env file in the root of your project.
2. Add your GitHub API key to the .env file:
   ```
   VITE_API_KEY=your_personal_access_token
   ```

### **4. Run the Application**
If using Vite, start the development server:
```bash
npm run dev
```
Then, open the application in your browser at `http://localhost:5173`.

---

## **Deployment**
To deploy the application:
1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the contents of the `dist/` folder to your hosting platform (e.g., Netlify, Vercel).

---

## **Usage**
1. Open the application in your browser.
2. Enter a GitHub username in the search bar and click "Search."
3. View the user's profile details and repositories.
4. Toggle between light and dark mode using the theme toggle button.

---

## **Environment Variables**
The application uses a .env file to store sensitive information like the API key. Ensure the .env file is added to .gitignore to prevent it from being committed to version control.

Example .env file:
```
VITE_API_KEY=your_personal_access_token
```

---

## **API Reference**
This application uses the [GitHub API](https://docs.github.com/en/rest) to fetch user and repository data.

### **Endpoints Used**
1. **Get User Details**:
   ```
   GET https://api.github.com/users/{username}
   ```
2. **Get User Repositories**:
   ```
   GET https://api.github.com/users/{username}/repos?sort=updated&per_page=6
   ```

---

## **Credits**
- [GitHub API](https://docs.github.com/en/rest) for providing the data.
- [Font Awesome](https://fontawesome.com/) for icons.
- [Google Fonts](https://fonts.google.com/) for typography.

---

## **License**
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## **Author**
Made by **Jongkuch Anyar**.

---
