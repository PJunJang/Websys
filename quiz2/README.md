
## pt.1

## pt.2 

## pt.3
 before fix:  1. INSERT INTO `items` (`id`, `name`, `price`) VALUES (1, 'MacBook Pro', '2499'), 
    (2, 'OpenBSD Tshirt, '20.0'),(3, 'Amazon echo', '99.99'),(4, 'Nvidia GTX 3080', '1999.99'),(5, 'AMD Ryzen 9 3900X’, '549.99'); </br>
    after fix : INSERT INTO `items` (`id`, `name`, `price`) VALUES ('1', 'MacBook Pro', '2499'), ('3', 'Amazon echo', '99.99'), ('4', 'Nvidia GTX 3080', '1999.99'), ('2', 'OpenBSD Tshirt', '20.0'), ('5', 'AMD Ryzen 9 3900X', '549.99');
