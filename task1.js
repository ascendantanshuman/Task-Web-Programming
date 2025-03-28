<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World - JavaScript Output</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        #output {
            font-size: 20px;
            color: blue;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <h1>JavaScript Output Methods</h1>

    <p id="output"></p>

    <button onclick="showAlert()">Show Alert</button>
    <button onclick="writeToDocument()">Write to Document</button>

    <script>
        document.getElementById("output").innerHTML = "Hello, World! (innerHTML)";
        console.log("Hello, World! (console.log)");

        function showAlert() {
            alert("Hello, World! (alert)");
        }

        function writeToDocument() {
            document.write("Hello, World! (document.write)");
        }
    </script>

</body>
</html>
