<?php 

abstract class Operation {
  protected $operand_1;
  protected $operand_2;
  public function __construct($o1, $o2) {
    // Make sure we're working with numbers...
    if (!is_numeric($o1) || !is_numeric($o2)) {
      throw new Exception('Non-numeric operand.');
    }
    
    // Assign passed values to member variables
    $this->operand_1 = $o1;
    $this->operand_2 = $o2;
  }
  public abstract function operate();
  public abstract function getEquation(); 
}

abstract class Operation_single {
  protected $operand_1;
  public function __construct($o1) {
    // Make sure we're working with numbers...
    if (!is_numeric($o1)) {
      throw new Exception('Non-numeric operand.');
    }
    
    // Assign passed values to member variables
    $this->operand_1 = $o1;
  }
  public abstract function operate();
  public abstract function getEquation(); 
}

// Addition subclass inherits from Operation
class Addition extends Operation {
  public function operate() {
    return $this->operand_1 + $this->operand_2;
  }
  public function getEquation() {
    return $this->operand_1 . ' + ' . $this->operand_2 . ' = ' . $this->operate();
  }
}


// Add subclasses for Subtraction, Multiplication and Division here
// Subtraction subclass inherits from Operation
class Subtraction extends Operation {
  public function operate() {
    return $this->operand_1 - $this->operand_2;
  }
  public function getEquation() {
    return $this->operand_1 . ' - ' . $this->operand_2 . ' = ' . $this->operate();
  }
}

// Multiplication subclass inherits from Operation
class Multiplication extends Operation {
  public function operate() {
    return $this->operand_1 * $this->operand_2;
  }
  public function getEquation() {
    return $this->operand_1 . ' * ' . $this->operand_2 . ' = ' . $this->operate();
  }
}

// Division subclass inherits from Operation
class Division extends Operation {
  public function operate() {
    return $this->operand_1 / $this->operand_2;
  }
  public function getEquation() {
    return $this->operand_1 . ' / ' . $this->operand_2 . ' = ' . $this->operate();
  }
}

// Sqrt subclass inherits from Operation
class Sqrt extends Operation_single {
  public function operate() {
    return sqrt($this->operand_1);
  }
  public function getEquation() {
    return 'sqrt '. $this->operand_1.' = '. $this->operate();
  }
}

// Squared subclass inherits from Operation
class Squared extends Operation_single {
  public function operate() {
    return $this->operand_1 * $this->operand_1; 
  }
  public function getEquation() {
    return $this->operand_1 . '^2' . ' = ' . $this->operate();
  }
}

// Power subclass inherits from Operation
class Power extends Operation {
  public function operate() {
    return pow($this->operand_1, $this->operand_2);
  }
  public function getEquation() {
    return $this->operand_1 . ' ^ ' . $this->operand_2 . ' = ' . $this->operate();
  }
}

// <!--
//       Square root
//       x^2
//       x^y
//       Log(10)
//       Ln
//       10^x
//       e^x
//       Sin
//       Cos
//       Tan
//      -->
// Log subclass
class Log extends Operation_single {
  public function operate() {
    // log(float $num, float $base = M_E): float
    return log($this->operand_1, 10);
  }
  public function getEquation() {
    return 'log(10)'.$this->operand_1  . ' = ' . $this->operate();
  }
}

// Ln subclass
class Ln extends Operation_single {
  public function operate() {
    // log(float $num, float $base = M_E): float
    return log($this->operand_1);
  }
  public function getEquation() {
    return 'ln'.$this->operand_1  . ' = ' . $this->operate();
  }
}

// tenp subclass
class Tenp extends Operation_single {
  public function operate() {
    // log(float $num, float $base = M_E): float
    return pow(10, $this->operand_1);
  }
  public function getEquation() {
    return '10^'.$this->operand_1  . ' = ' . $this->operate();
  }
}

// e^x subclass
class Ep extends Operation_single {
  public function operate() {
    return exp($this->operand_1);
  }
  public function getEquation() {
    return 'e^'.$this->operand_1  . ' = ' . $this->operate();
  }
}

// sin subclass
class Sin extends Operation_single {
  public function operate() {
    return sin($this->operand_1);
  }
  public function getEquation() {
    return 'Sin'.$this->operand_1  . ' = ' . $this->operate();
  }
}
// cos subclass
class Cos extends Operation_single {
  public function operate() {
    return cos($this->operand_1);
  }
  public function getEquation() {
    return 'Cos'.$this->operand_1  . ' = ' . $this->operate();
  }
}
// tan subclass
class Tan extends Operation_single {
  public function operate() {
    return tan($this->operand_1);
  }
  public function getEquation() {
    return 'Tan'.$this->operand_1  . ' = ' . $this->operate();
  }
}


// Some debugs - uncomment these to see what is happening...
// echo '$_POST print_r=>',print_r($_POST);
// echo "<br>",'$_POST vardump=>',var_dump($_POST);
// echo '<br/>$_POST is ', (isset($_POST) ? 'set' : 'NOT set'), "<br/>";
// echo "<br/>---";


// Check to make sure that POST was received 
// upon initial load, the page will be sent back via the initial GET at which time
// the $_POST array will not have values - trying to access it will give undefined message

  if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $o1 = $_POST['op1'];
    $o2 = $_POST['op2'];
  }
  $err = Array();


// Instantiate an object for each operation based on the values returned on the form
// For example, check to make sure that $_POST is set and then check its value and 
// instantiate its object
// 
// The Add is done below.  Go ahead and finish the remiannig functions.  
// Then tell me if there is a way to do this without the ifs
// We might cover such a way on Tuesday...

  try {
    if (isset($_POST['add']) && $_POST['add'] == 'Add') {
      $op = new Addition($o1, $o2);
    }
    // Put code for subtraction, multiplication, and division here
      elseif(isset($_POST['sub']) && $_POST['sub'] == 'Subtract'){
      $op = new Subtraction($o1, $o2);
    } elseif(isset($_POST['mult']) && $_POST['mult'] == 'Multiply'){
      $op = new Multiplication($o1, $o2);
    } elseif(isset($_POST['divi']) && $_POST['divi'] == 'Divide'){
      $op = new Division($o1, $o2);
    } elseif(isset($_POST['power']) && $_POST['power'] == 'Power'){
      $op = new Power($o1, $o2);
    } elseif(isset($_POST['sqrt'])  == 'Sqrt'){
      $op = new Sqrt($o1);
    } elseif(isset($_POST['squared'])  == 'Squared'){
      $op = new Squared($o1);
    } elseif(isset($_POST['log'])  == 'Log'){
      $op = new Log($o1);
    } elseif(isset($_POST['ln'])  == 'Ln'){
      $op = new Ln($o1);
    } elseif(isset($_POST['tenp'])  == 'Tenp'){
      $op = new Tenp($o1);
    } elseif(isset($_POST['ep'])  == 'Ep'){
      $op = new Ep($o1);
    } elseif(isset($_POST['sin'])  == 'Sin'){
      $op = new Sin($o1);
    } elseif(isset($_POST['cos'])  == 'Cos'){
      $op = new Cos($o1);
    } elseif(isset($_POST['tan'])  == 'Tan'){
      $op = new Tan($o1);
    }
  }
  catch (Exception $e) {
    $err[] = $e->getMessage();
  }
?>

<!doctype html>
<html>
<head>
<title>PHP Calculator</title>
</head>
<body>
  <pre id="result">
  <?php 
    if (isset($op)) {
      try {
        echo $op->getEquation();
      }
      catch (Exception $e) { 
        $err[] = $e->getMessage();
      }
    }

    foreach($err as $error) {
        echo $error . "\n";
    } 
  ?>
  </pre>
  <form method="post" action="calculator.php">
    <input type="text" name="op1" id="name" value="" />
    <input type="text" name="op2" id="name" value="" />
    <br/>
    <!-- Only one of these will be set with their respective value at a time -->
    <input type="submit" name="add" value="Add" />  
    <input type="submit" name="sub" value="Subtract" />  
    <input type="submit" name="mult" value="Multiply" />  
    <input type="submit" name="divi" value="Divide" />  
    <!--
      Square root
      x^2
      x^y
      Log(10)
      Ln
      10^x
      e^x
      Sin
      Cos
      Tan
     -->
    <input type="submit" name="sqrt" value="Sqrt" />
    <input type="submit" name="squared" value="x^2" />
    <input type="submit" name="power" value="x^y" />
    <input type="submit" name="log" value="Log(10)" />  
    <input type="submit" name="ln" value="Ln" />
    <input type="submit" name="tenp" value="10^x" />
    <input type="submit" name="ep" value="e^x" />
    <input type="submit" name="sin" value="Sin" />
    <input type="submit" name="cos" value="Cos" />
    <input type="submit" name="tan" value="Tan" />
  </form>
</body>
</html>

