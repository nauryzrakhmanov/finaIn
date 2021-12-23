

		$(".extremum-click").click(function () {
      $(this).siblings(".extremum-slide").slideToggle("slow");
    });
        function validateForm() {
        let x = document.forms["myForm"]["My name"].value;
        if (x == "") {
        alert("Name must be filled out");
        return false;
            }
        }







