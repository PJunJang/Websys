
README Lab7_ITWS2110 WEB_SYS
NAME : Paul Jang

## Part1 : 
	1. Created a database <websyslab7>
  	2. created two tables : 
		1) courses(crn(Primary), prefix, number, title)
		2) students(RIN(Primary), RCSID, firstname, lastname, alias, phone)
CREATE TABLE `websyslab7`.`courses` ( `crn` INT(11) NOT NULL ,  `prefix` VARCHAR(4) NOT NULL ,  `number` SMALLINT(4) NOT NULL ,  `title` VARCHAR(255) NOT NULL ) ENGINE = InnoDB; <br/>
ALTER TABLE `courses` ADD PRIMARY KEY(`crn`); <br/>
CREATE TABLE `websyslab7`.`students` ( `RIN` INT(9) NOT NULL ,  `RCSID` CHAR(7) NOT NULL ,  `firstname` VARCHAR(100) NOT NULL , `lastname` VARCHAR(100) NOT NULL ,  `alias` VARCHAR(100) NOT NULL ,  `phone` INT(10) NOT NULL ) ENGINE = InnoDB; <br/>
 ALTER TABLE `students` ADD PRIMARY KEY(`RIN`); <br/>

 ## Part2 : 
	1. added columns(street, city, state, zip) to the <students> using phpmyadmin => add columns
ALTER TABLE `students`  ADD `street` VARCHAR(100) NOT NULL  AFTER `phone`,  ADD `city` VARCHAR(30) NOT NULL  AFTER `street`,  ADD `state` VARCHAR(30) NOT NULL  AFTER `city`,  ADD `zip` VARCHAR(10) NOT NULL  AFTER `state`;

	2. added columns(section, year) to the <courses>: same as above
  ALTER TABLE `courses`  ADD `section` VARCHAR(100) NOT NULL  AFTER `title`,  ADD `year` VARCHAR(10) NOT NULL  AFTER `section`;
  
	3. created a new table <grades>(id(Primary), crn, RIN, grade)
		: set crn and RIN as foregin keys using relation table
  CREATE TABLE `websyslab7`.`grades` ( `id` INT NOT NULL AUTO_INCREMENT ,  `crn` INT(11) NOT NULL ,  `RIN` INT(9) NOT NULL ,  `grade` INT(3) NOT NULL ,    PRIMARY KEY  (`id`)) ENGINE = InnoDB;   <br/>
  
  4. INSERTED Four courses :	
		1) crn : 60077, prefix : PSYC, number : 1200, title : INTRO TO PSYCHOLOGICAL SCIENCE, section : 01, year : 2018
		2) crn : 62592, prefix : BIOL, number : 1010, title : INTRODUCTION TO BIOLOGY, section : 01, year : 2021
		3) crn : 64987, prefix : CHME, number : 1100, title : FUNDMTLS OF CHEMICAL ENGR, section : 01, year : 2020
		4) crn : 65054, prefix : ASTR, number : 1520, title : STARS, GALAXIES AND THE COSMOS, section : 01, year : 2020
		  a. INSERT INTO `courses` (`crn`, `prefix`, `number`, `title`, `section`, `year`) VALUES ('62592', 'BIOL', '1010', 'INTRODUCTION TO BIOLOGY', '01', '2021'), ('65054', 'ASTR', '1520', 'STARS, GALAXIES AND THE COSMOS', '01', '2020'); <br/>
      b. INSERT INTO `courses` (`crn`, `prefix`, `number`, `title`, `section`, `year`) VALUES ('64987', 'CHME', '1100', 'FUNDMTLS OF CHEMICAL ENGR', '01', '2020'), ('60077', 'PSYC', '1200', 'INTRO TO PSYCHOLOGICAL SCIENCE', '01', '2018'); <br/>
	
 5. Inserted Four students :
		
1) RIN : 456123784 , RCSID : rhisj, firstname : Liam, lastname : Neeson , alias : Father, phone : 2104567123 , 			street : 15 Congress Ave , city : Troy, state : NY, zip : 12180
2) RIN : 617945132, RCSID : pjhan3, firstname : Paulo, lastname : Santiago, alias : Sancho, phone : 1234567890, 		street : 43 4Th Street , city : Troy, state : NY, zip : 12180

3) RIN : 769436612, RCSID : leomes, firstname : Lionel, lastname : Messi, alias : Goat, phone : 2145541212, 			street : 405 Hilgard Avenue , city : LA, state : CA , zip : 90095

4) RIN : 789456154, RCSID : quesa, firstname : Quentin, lastname : Tarantino , alias : Director, phone : 		1525678896, street : 19 Hillcrest Ave , city : Albany, state : NY, zip : 12222 <br/>
  a. <br/>INSERT INTO `students` (`RIN`, `RCSID`, `firstname`, `lastname`, `alias`, `phone`, `street`, `city`, `state`, `zip`) VALUES ('617945132', 'pjhan3', 'Paulo', 'Santiago', 'Sancho', '1234567890', '4Th Street', 'Troy', 'NY', '12180'), ('456123784', 'rhisj', 'Liam', 'Neeson', 'Father', '2104567123', '15 Congress Ave', 'Troy', 'NY', '12180');<br/>
  b. <br/> INSERT INTO `students` (`RIN`, `RCSID`, `firstname`, `lastname`, `alias`, `phone`, `street`, `city`, `state`, `zip`) VALUES ('789456154', 'quesa', 'Quentin', 'Tarantino', 'Director', '1525678896', '19 Hillcrest Ave', 'Albany', 'NY', '12222'), ('769436612', 'leomes', 'Lionel', 'Messi', 'Goat', '2145541212', '405 Hilgard Avenue', 'Los Angeles', 'CA', '90095');<br/>
  
6. Added 10 grades to the grades table : </br>
  1) INSERT INTO `grades` (`id`, `crn`, `RIN`, `grade`) VALUES (NULL, '65054', '769436612', '91'), (NULL, '62592', '617945132', ''); </br>
  2) INSERT INTO `grades` (`id`, `crn`, `RIN`, `grade`) VALUES (NULL, '64987', '789456154', '96'), (NULL, '60077', '456123784', '87'), (NULL, '65054', '617945132', '78'), (NULL, '62592', '789456154', '54'), (NULL, '64987', '456123784', '98'), (NULL, '60077', '769436612', '79'), (NULL, '65054', '789456154', '67'), (NULL, '62592', '456123784', '89'); </br>
7. List Students in lexicographical order => RIN, lastname, RCSID, firstname </br>
SELECT * FROM `students` WHERE 1 ORDER BY `RIN`,`lastname`,`RCSID`,`firstname`;

8. List all students RIN, name, and address if their grade in any course was higher than a 90</br>
SELECT students.RIN, students.firstname, students.lastname, students.street,students.city,students.state,students.zip FROM `students` INNER JOIN grades on students.RIN = grades.RIN WHERE grades.grade > 90; </br>
9. List out the average grade in each course </br>
SELECT courses.title, avg(grades.grade) as avgGrade FROM `grades` INNER JOIN courses on grades.crn= courses.crn GROUP BY courses.title;</br>
10.  List out the number of students in each course</br>
SELECT COUNT(grades.RIN), courses.title FROM `courses` INNER JOIN grades on courses.crn = grades.crn join students on students.RIN = grades.RIN group by courses.title;</br>
12. 
