<?php
// This is a program to calculate the numbers in an array taking into
// consideration that some of these numbers are big integers
// Complete the aVeryBigSum function below.
function aVeryBigSum($ar) {
    $totalSum = 0;
    foreach($ar as $key){
        $totalSum += $key;
    }
    return $totalSum;

}

$fptr = fopen(getenv("OUTPUT_PATH"), "w");

$stdin = fopen("php://stdin", "r");

fscanf($stdin, "%d\n", $ar_count);

fscanf($stdin, "%[^\n]", $ar_temp);

$ar = array_map('intval', preg_split('/ /', $ar_temp, -1, PREG_SPLIT_NO_EMPTY));

$result = aVeryBigSum($ar);

fwrite($fptr, $result . "\n");

fclose($stdin);
fclose($fptr);


?>