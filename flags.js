<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countries and Flags</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1 id="title">Countries and Flags</h1>
    <div class="flags-container">
        <img src="Flag_of_the_United_States.png" alt="USA Flag" class="flag" data-country="USA" data-map="Flag_of_the_United_States.png">
        <img src="canada-flag.jpg" alt="Canada Flag" class="flag" data-country="Canada" data-map="canada-flag.jpg">
        <img src="Flag_of_the_United_Kingdom_(1-2).svg.png" alt="UK Flag" class="flag" data-country="United Kingdom" data-map="Flag_of_the_United_Kingdom_(1-2).svg.png">
    </div>
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const flags = document.querySelectorAll(".flag");
            const title = document.getElementById("title");
            
            flags.forEach(flag => {
                const originalSrc = flag.src;
                const countryName = flag.getAttribute("data-country");
                const mapSrc = flag.getAttribute("data-map");
                
                flag.addEventListener("mouseover", () => {
                    flag.src = mapSrc;
                    title.textContent = countryName;
                });
                
                flag.addEventListener("mouseout", () => {
                    flag.src = originalSrc;
                    title.textContent = "Countries and Flags";
                });
            });
        });
    </script>
</body>
</html>
