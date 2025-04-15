function generateTable() {
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);

    if (isNaN(n1) || isNaN(n2) || n1<2 || n1>10 || n2<2 || n2>10) {
        alert("Please enter numbers between 2 and 10");
        return;
    }

    else {
        var output = "<table>";
        for (var i=1; i<=n1; i++) {
            output += "<tr>";
            for (var j=1;j<=n2; j++) {
                output += "<td>" + (i * j) + "</td>";
            }
            output += "</tr>";
        }
        output += "</table>";

        document.getElementById("output").innerHTML = output;
    }
}