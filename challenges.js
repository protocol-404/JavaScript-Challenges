const challenges = {
    "Beginner": [
        {
            id: "change-color",
            title: "Change page body color on click",
            description: "Create a button that changes the background color of the page randomly on each click.",
            link: "level_1/change-color.html"
        },
        {
            id: "custom-alert",
            title: "Display an alert with a custom message",
            description: "Create a form with a text field and a button. When the user clicks the button, display the entered message in an alert.",
            link: "level_1/custom-alert.html"
        },
        {
            id: "mouse-position",
            title: "Display mouse position in real-time",
            description: "Display the X and Y coordinates of the mouse as it moves across the page.",
            link: "level_1/mouse-position.html"
        },
        {
            id: "modal-box",
            title: "Create a modal box that shows and hides with a button",
            description: "Add a button that displays a modal box. Add another button in the box to close it.",
            link: "level_1/modal-box.html"
        },
        {
            id: "click-counter",
            title: "Count the number of times a button is clicked",
            description: "Create a button that displays the total number of clicks made by the user.",
            link: "level_1/click-counter.html"
        },
        {
            id: "toggle-visibility",
            title: "Toggle element visibility on click",
            description: "Create a button that shows or hides an element on click.",
            link: "level_1/toggle-visibility.html"
        },
        {
            id: "hover-text",
            title: "Change element text on mouse hover",
            description: "Change the text of an element when the mouse hovers over it.",
            link: "level_1/hover-text.html"
        },
        {
            id: "validate-input",
            title: "Validate an input field",
            description: "Validate a field to ensure it contains at least 5 characters.",
            link: "level_1/validate-input.html"
        },
        {
            id: "add-class",
            title: "Add a CSS class to an element",
            description: "Add a CSS class to an element on click.",
            link: "level_1/add-class.html"
        },
        {
            id: "countdown-timer",
            title: "Create a countdown timer",
            description: "Add a timer that displays a dynamic countdown.",
            link: "level_1/countdown-timer.html"
        }
    ],
    "Intermediate": [
        {
            id: "dynamic-list",
            title: "Create a dynamic list of elements",
            description: "Allow users to add and remove items from a list using a form.",
            link: "level_2/dynamic-list.html"
        },
        {
            id: "delete-items",
            title: "Delete items from a list",
            description: "Add a button to delete specific items from a list.",
            link: "level_2/delete-items.html"
        },
        {
            id: "drag-drop",
            title: "Reorder a list using drag and drop",
            description: "Create a list of elements that users can reorder using drag and drop.",
            link: "level_2/drag-drop.html"
        },
        {
            id: "image-gallery",
            title: "Create an image gallery with click to enlarge",
            description: "Add a gallery where clicking on a thumbnail displays it in full size.",
            link: "level_2/image-gallery.html"
        },
        {
            id: "form-validation",
            title: "Validate a form with multiple fields",
            description: "Add validation for fields like email and password.",
            link: "level_2/form-validation.html"
        },
        {
            id: "progress-bar",
            title: "Create a dynamic progress bar",
            description: "Add a progress bar that fills based on user action.",
            link: "level_2/progress-bar.html"
        },
        {
            id: "random-numbers",
            title: "Generate random numbers",
            description: "Display random numbers in a dynamic table.",
            link: "level_2/random-numbers.html"
        },
        {
            id: "filter-list",
            title: "Filter list elements",
            description: "Allow filtering of elements based on user input.",
            link: "level_2/filter-list.html"
        },
        {
            id: "pagination",
            title: "Implement a pagination system",
            description: "Create a paginated list to handle a large number of items.",
            link: "level_2/pagination.html"
        },
        {
            id: "media-player",
            title: "Create a simple audio/video player",
            description: "Add a player with basic controls to play media.",
            link: "level_2/media-player.html"
        }
    ],
    "Advanced": [
        {
            id: "todo-app",
            title: "Complete Todo List Application",
            description: "Create a todo list application with local storage, filters, and editing.",
            link: "level_3/todo-app.html"
        },
        {
            id: "drag-drop-tasks",
            title: "Reorder tasks using drag and drop",
            description: "Add drag and drop functionality to organize tasks in a Todo List.",
            link: "level_3/drag-drop-tasks.html"
        },
        {
            id: "notes-app",
            title: "Notes system with localStorage",
            description: "Create a note management application with local storage.",
            link: "level_3/notes-app.html"
        },
        {
            id: "theme-toggle",
            title: "Implement dark and light mode",
            description: "Add a button to toggle between dark and light modes.",
            link: "level_3/theme-toggle.html"
        },
        {
            id: "keyboard-events",
            title: "Handle keyboard events",
            description: "Add key combinations to trigger specific actions.",
            link: "level_3/keyboard-events.html"
        },
        {
            id: "css-animation",
            title: "Add CSS animation with JavaScript",
            description: "Create an animation triggered by user action.",
            link: "level_3/css-animation.html"
        },
        {
            id: "dynamic-content",
            title: "Load HTML content dynamically",
            description: "Add functionality to dynamically load external HTML file.",
            link: "level_3/dynamic-content.html"
        },
        {
            id: "carousel",
            title: "Create an image carousel",
            description: "Add a carousel with automatic and manual navigation.",
            link: "level_3/carousel.html"
        },
        {
            id: "canvas-chart",
            title: "Create a chart using Canvas",
            description: "Add a simple chart using the Canvas API.",
            link: "level_3/canvas-chart.html"
        },
        {
            id: "game",
            title: "Create a simple game",
            description: "Create an interactive game like Rock-Paper-Scissors.",
            link: "level_3/game.html"
        }
    ],
    "Expert": [
        {
            id: "api-fetch",
            title: "Fetch data from a public API",
            description: "Display data retrieved from an API in a table format.",
            link: "level_4/api-fetch.html"
        },
        {
            id: "api-promises",
            title: "Handle multiple API calls with Promise.all",
            description: "Combine multiple API calls and display the results.",
            link: "level_4/api-promises.html"
        },
        {
            id: "live-search",
            title: "Implement a live search",
            description: "Create a search bar that interacts with an API in real-time.",
            link: "level_4/live-search.html"
        },
        {
            id: "spa-navigation",
            title: "Create an application with SPA navigation",
            description: "Add navigation between multiple views with a SPA architecture.",
            link: "level_4/spa-navigation.html"
        },
        {
            id: "jwt-auth",
            title: "Implement JWT authentication",
            description: "Simulate or implement authentication with JSON Web Tokens.",
            link: "level_4/jwt-auth.html"
        },
        {
            id: "canvas-game",
            title: "Create an advanced game with Canvas",
            description: "Create a more complex game using the Canvas API.",
            link: "level_4/canvas-game.html"
        },
        {
            id: "advanced-charts",
            title: "Create advanced charts with Chart.js",
            description: "Add interactive charts and graphs using Chart.js.",
            link: "level_4/advanced-charts.html"
        },
        {
            id: "realtime-app",
            title: "Create a real-time application with WebSocket",
            description: "Add real-time functionality like a chat with WebSocket.",
            link: "level_4/realtime-app.html"
        },
        {
            id: "3d-animation",
            title: "Create a 3D animation with Three.js",
            description: "Add a simple 3D animation using the Three.js library.",
            link: "level_4/3d-animation.html"
        },
        {
            id: "full-stack-app",
            title: "Build a Full Stack application",
            description: "Develop a complete application with a back-end API and front-end interface.",
            link: "level_4/full-stack-app.html"
        }
    ]
};
