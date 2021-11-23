<?php
   $conn = mysqli_connect("localhost", "root", "" , "websys_quiz");
   $sql = "SELECT * FROM items ORDER BY price ASC";
   $result = mysqli_query($conn, $sql);
   if (mysqli_num_rows($result) > 0) {
   while($row = mysqli_fetch_assoc($result)) {
   echo "id: " . $row["id"]. " name:" . $row["name"]. "price:". $row["price"]."<br>";
   }
   }else{
   echo "No data exists.";
   }
   mysqli_close($conn); // close
?>