/**
 * Problem 7. Is prime

 Write an expression that checks if given positive integer number n (n ? 100) is prime.
 */
function result7(){
    var result;
    var num = document.getElementById('isPrime').value;
    var isPositive = num > 0;
    var numDivisions = 0;
    if (isPositive == true && num != 1 && num<=100)
    {
        for (var i = 1; i <= num; i++)
        {
            if (num % i == 0)
            {
                numDivisions++;
            }
        }

        if (numDivisions > 2)
        {
            result = 'false';
        }
        else
        {
            result = 'true';
        }
    }
    else
    {
        result = 'You should enter a positive whole number, smaller or equal to 100';
    }
    document.getElementById('answer7').innerHTML = result;
}