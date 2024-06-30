<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>O'tableau</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Pangolin&family=Roboto+Slab&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h1>O'tableau</h1>
    <main>
        <div class="board">
            <div class="text-board">
            </div>
            <img class="background" src="images/tableau.png" alt="tableau">
        </div>
        <div class="settings">
            <div class="line">
                <div class="field text-field">
                    <label for="text">Texte du tableau</label>
                    <input type="text" name="text" id="text" class="input">
                </div>
                <div class="field">
                    <label for="number_lines">Nombre de lignes</label>
                    <input type="number" name="number_lines" id="number_lines" value="10" class="number_lines" min="1">
                </div>
            </div>
        </div>
    </main>
    <script src="js/app.js"></script>
</body>
</html>
