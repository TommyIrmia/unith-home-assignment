# UNITH Candidate Front-End Test Assignment
#### This project is a Single Page Application (SPA) built to demonstrate front-end development skills. The application fetches and displays a dataset from an external API, with a focus on responsive design, state management, and error handling.

### Design Considerations
- SPA Structure : Ensured a modular and maintainable codebase with a clear separation of concerns.
- State Management : Used Redux to manage the application state efficiently.
- Performance : Utilized lazy loading, memoization, and infinite scroll for optimized performance.
- Error Handling : Developed a custom error interceptor for graceful API error handling without bugging the user with error messages.
- Docker : Dockerized the application for easy deployment and consistent development environments.

# Features
### Gallery
Displays Items - Each item includes an image, title, index, and optional description retrieved by an API call.
The items are displayed in ascending order based on their index.

### Error Handling
Error Interceptor - In case of API errors, the application shows the last valid response or activates a retry mechanism.
The interceptor will add the error to the App Store State and create an error object suitable for the frontend side of the application.

### State Management
Redux State Management: Manages the application state with Redux (Using flux methodolgy) - including fetching data, loading and error state and setting an active item.


### Navigation
The application has three main pages:
- Main page displaying the list of items.
- Detail page for viewing an individual item with a "Go Home" button to return to the main page.
- Not found page displayed whenever user navigated to an uknown path.

### Performance
- Image Caching: Implements image caching for efficient loading using Service Worker.
- Lazy Loading: Uses React.lazy and Suspense for component lazy loading + react-lazy-loaded-image npm to lazy load images.
- Memoization: Utilizes React.memo and useMemo to optimize rendering performance where ever is needed.
- Infinite Scroll: Supports infinite scroll behavior for a better user experience and quicker loading times.

### Stack Used
- Vite 5
- React 18
- redux 5
- React Redux 9
- TypeScript
- Sass
- Axios
- react-router 6
- Docker

#### Alternative Libraries
- Axios
- dompurify
- react-lazy-loading-image
- vite-plugin-svgr









## Run Locally
You can run the project using Docker or npm.

Step 1 : Clone the repository:

```bash
git clone https://github.com/your-repo/unith-home-assignment.git
cd unith-home-assignment
```


### Option 1: Using Docker

1. Build the Docker Image:

```bash
  docker build -t unith-home-assignment-Tommy .
```

2. Run the Docker Container:
```bash
docker run --name unith-home-assignment-Tommy -p 5173:5173 <image-id>
```
### Or option 2: Using docker volumes

1. This will start the application and bind the current directory and node modules to the Docker container, allowing for easy development and live reloading.

```bash
  docker compose up --build
```

### Or option 3: Using npm

1. Go to the project directory

```bash
  cd my-project
```

2. Install dependencies:

```bash
   npm install
```

3. This will compile the code and launch the app in your default web browser at http://localhost:5173.

```bash
npm run dev
```
