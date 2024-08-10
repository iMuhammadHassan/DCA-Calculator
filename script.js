
    function DCA_calculator(event) {
        event.preventDefault(); // Prevent form submission
        // Retrieve the values
        let entryPrice = parseFloat(document.getElementById("entry_price").value);
        let entryQuantity = parseFloat(document.querySelectorAll(".Calculator-form input")[1].value);
        let entryLeverage = parseFloat(document.querySelectorAll(".Calculator-form input")[2].value);

        let marketPrice = parseFloat(document.querySelectorAll(".Calculator-form input")[3].value);
        let marketQuantity = parseFloat(document.querySelectorAll(".Calculator-form input")[4].value);
        let marketLeverage = parseFloat(document.querySelectorAll(".Calculator-form input")[5].value);

        let  position_size_one = parseFloat(entryQuantity * entryLeverage);
        let position_size_two = parseFloat(marketQuantity * marketLeverage);

        // Perform DCA calculation (example calculation)
        let totalCost = (entryPrice * position_size_one) + (marketPrice * position_size_two);
        let totalQuantity = position_size_one + position_size_two;
        let dca = totalCost / totalQuantity;
        
        // Set the result in the hidden input field
        document.getElementById("new_entry_price").style.display = "block";
        document.getElementById("new_entry_price").value = dca.toFixed(2);
        // alert("Your DCA is: " + dca.toFixed(2));
    }
