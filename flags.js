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
        <img src="images/usa_flag.png" alt="USA Flag" class="flag" data-country="USA" data-map="images/usa_map.png">
        <img src="canada-flag.jpg" alt="Canada Flag" class="flag" data-country="Canada" data-map="canada-flag.jpg">
        <img src="images/uk_flag.png" alt="UK Flag" class="flag" data-country="United Kingdom" data-map="images/uk_map.png">
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
