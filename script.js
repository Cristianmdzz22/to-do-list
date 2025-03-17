body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
    text-align: center;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

input {
    width: 80%;
    padding: 8px;
    margin-bottom: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px;
    font-size: 16px;
    border: none;
    background-color: #4CAF50;
    color: white;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    background-color: #f9f9f9;
    padding: 10px;
    margin: 5px 0;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

li.completed {
    text-decoration: line-through;
    color: #888;
}

button.delete {
    background-color: #ff4d4d;
    padding: 5px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
}

button.delete:hover {
    background-color: #e60000;
}