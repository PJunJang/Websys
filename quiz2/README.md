
## pt.1 & pt.2
All included in the document file.


## pt.3
 before fix:  1. INSERT INTO `items` (`id`, `name`, `price`) VALUES (1, 'MacBook Pro', '2499'), 
    (2, 'OpenBSD Tshirt, '20.0'),(3, 'Amazon echo', '99.99'),(4, 'Nvidia GTX 3080', '1999.99'),(5, 'AMD Ryzen 9 3900X’, '549.99'); </br>
    after fix : INSERT INTO `items` (`id`, `name`, `price`) VALUES ('1', 'MacBook Pro', '2499'), ('3', 'Amazon echo', '99.99'), ('4', 'Nvidia GTX 3080', '1999.99'), ('2', 'OpenBSD Tshirt', '20.0'), ('5', 'AMD Ryzen 9 3900X', '549.99');

For the overall System...
 Once the user lands on to the index.html, the user gets to click on the button links to the quiz2.php.
 From there, the user could click one of three links(buttons) to fetch three different order of list from the database.
 First button, successfully connects to the page(b1.php) and fetch all data correctly which is before applying discounts in ascending order from the lowest to highest.
 Second button, also successfully connects to the page(b2.php) and fetch data correctly which sorts items after applying discounts. In order to do this command, I had to join items and discounts table with foregin keys and multiply discount and price to get total price.
 
