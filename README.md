# Meal Selector

Meal Selector is a React-based web application designed to help users answer the age-old question: "What should I cook today?". The app provides a variety of meal suggestions from different categories, random meal ideas, and search capabilities for specific recipes.

---

## Features

- **Meal Categories**: Explore recipes by selecting a meal category.
- **Random Meal Generator**: Discover new recipes with a single click.
- **Search Functionality**: Search meals by name for tailored results.
- **Recipe Details**: View recipe details and instructions on the MealDB platform.
- **Dynamic Data Integration**: Real-time recipe data fetched from the MealDB API.

---

## Project Structure

```
Meal Selector/
├── public/                     # Public-facing assets (HTML, icons, etc.)
├── src/                        # React source code
│   ├── components/             # Reusable React components
│   ├── App.js                  # Main application component
│   ├── index.js                # Application entry point
│   └── styles.css              # Custom styles
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation
```

---

## Data Collection and Processing

### API Integration
The application utilizes the [MealDB API](https://www.themealdb.com/) to fetch meal data dynamically:
- **Categories**: Fetches a list of meal categories via `https://www.themealdb.com/api/json/v1/1/list.php?c=list`.
- **Meals by Category**: Retrieves meals from a selected category via `https://www.themealdb.com/api/json/v1/1/filter.php?c={category}`.
- **Random Meal**: Fetches a random meal using `https://www.themealdb.com/api/json/v1/1/random.php`.

---

## Technologies Used

### Frontend
- **React.js**: JavaScript library for building the user interface.
- **Bootstrap**: Styling framework for responsive design.
- **Axios**: Library for HTTP requests.

### API
- **MealDB API**: Provides dynamic meal data, including images and recipe links.

---

## Getting Started

### Prerequisites
Ensure the following are installed on your system:
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd meal-selector
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The application will run at [http://localhost:3000](http://localhost:3000).

---

## Features in Detail

### Meal Categories
- View a dropdown of meal categories.
- Select a category to load corresponding meals.

### Random Meal Generator
- Click a button to receive a random recipe suggestion.
- Get direct links to detailed instructions.

### Search Functionality
- Search for recipes by name.
- Filter results dynamically as you type.

### Recipe Details
- See meal titles, images, and a link to detailed recipes hosted on MealDB.

---

## Credits for AI Assistance

AI tools, including ChatGPT, were utilized during the development process. These tools assisted in:
- Designing the overall structure of the React application.
- Crafting API integration logic for fetching and displaying meal data.
- Styling suggestions using Bootstrap.

All AI-generated code was reviewed, understood, and integrated into the project.

---

## Contributing

Feel free to contribute to the Meal Selector project. Submit pull requests or open issues to share your suggestions.

---

