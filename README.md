<html>
<head>
    <title>Viper's Counters'</title>
    <style>
        .container {
            position:relative; 
            right:0px;
            top:25px; 
            width: 210px;
            height: 385px;
            border: 1px solid black;
            margin: 0 auto;
        }
        

    </style>
    <script>


        
        var counter = 51;

        var correct = false
        function incrementCounter() {
            if (correct === true) { 

                counter++;
                document.getElementById("counter-display").innerHTML = counter;
            }
            else {
                alert("User is not authorized");
            }
        }

        function password() {
            let submit = document.querySelector("#userinput").value
            if (submit === "a123") {

                correct = true;

            }


        }


    </script>
</head>
<body>



    <h1 style="position:relative; text-align:center; top:10px; font-family:monospace;">Viper's Lily Counter</h1>
    <div class="container">
        <p style="position: relative; left: 0px; top: 0px; text-align: center;">"Lilliam dont you dare say it"</p>
        <img style="position:relative; left:5px;" src="lily.png">
        <p style="position:relative; left:0px; top:-5px; text-align:center;"> <span id="counter-display">0</span></p>
        <button style="position:relative; left:30px; top:-10px; text-align:center;" button onclick="incrementCounter()">Lilly said the FUNNY!!!</button>
        <center>
            <input id="userinput" style="position:relative; width:142px;">
            <button style="position:relative; top:10px" button onclick="password()"> Submit </button>
        </center>
    </div>
    


</body>
</html>
