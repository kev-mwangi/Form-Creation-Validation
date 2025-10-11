// Initialize the Async Function
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    // Fetch Data Using try-catch
    try {
        // Fetch data from API
        const response = await fetch(apiUrl);
        
        // Convert response to JSON
        const users = await response.json();
        
        // Clear the Loading Message
        dataContainer.innerHTML = '';
        
        // Create and Append User List
        const userList = document.createElement('ul');
        
        // Loop through users array
        users.forEach(user => {
            // Create list item for each user
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            
            // Append list item to user list
            userList.appendChild(listItem);
        });
        
        // Append user list to data container
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Error Handling
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);