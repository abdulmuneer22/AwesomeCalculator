# AwesomeCalculator

This calculator will have All the buttons as components.
Component Will was value as prop to the component eg 1,2,3,-,4
Child have a prop function to set state of parent


for handling the buttons , for '=' and 'DEL' custom functions are written , which will update the state value of CalculatorDisplayValue ;

DEL = > CalculatorDisplayValue : 0
'=' => takes prefix and post fix of complete input value , calculates result , updates CalculatorDisplayValue : result 


for '1,2,3,4,5,6,7,8,9,0,.' : input value is appeneded to existing CalculatorDisplayValue.

eg : if 2 is pressed ( CalculatorDisplayValue : 0 => CalculatorDisplayValue : 2 )
     if pressed again (CalculatorDisplayValue : 2 => CalculatorDisplayValue :22 )
     
     if '+' pressed (CalculatorDisplayValue : 22 => CalculatorDisplayValue : 22+)
     if '4' pressed (CalculatorDisplayValue : 22+ => CalculatorDisplayValue : 22+4)
     
     if '=' pressed :
     
              finds operator ( '+ or x or - or / ' ) :
                    splits CalculatorDisplayValue to a and b
                      a= 22
                      b = 4
                          result = 22+4 => 26
                          (CalculatorDisplayValue : 22+4 => CalculatorDisplayValue : 26)
                          
     
