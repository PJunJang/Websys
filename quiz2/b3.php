<?php
   $conn = mysqli_connect("localhost", "root", "" , "websys_quiz");
   $sql = "SELECT p.name, p.price*d.discount AS total_price From items p JOIN discounts d ON d.item_id = p.id ORDER BY total_price ASC;";
   $result = mysqli_query($conn, $sql);
   if (mysqli_num_rows($result) > 0) {
   while($row = mysqli_fetch_assoc($result)) {
   echo "name:" . $row["name"]. "price:". $row["total_price"]."<br>";
   }
   }else{
   echo "No data exists.";
   }
   mysqli_close($conn); // close
?>