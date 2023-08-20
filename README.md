# code-assignment-bc

Requirements:

npm,

inquirer


1) "validDate.js" contains functions to get valid date from user and its helper functions are defined in file "getDateHelpers.js".

2) "getAlphabet.js" file introduce to define function to get an alphabet letter from user.

3) "getDogBreedAsUser.js" had function to filter out photos, generate randam alphabet and assigned dog breed to the generated dates.

## TO Run:

Run file:

### node assignment.js

-> select one of the four names
-> Enter a letter of alphabet
-> Enter any present or future Year -> Month -> Day (make sure to enter valid date for lear year feb month)

## Result:

Result will print dog breed from the selected dates  till all the breeds are exhausted.

At the end program will ask you to run again or quit.



Assumption:
 User knows when and how many days are there in February month of the leap years.



## Fixed Bugs:

1) In file "assignment.js" replaced import "fetchDogs" to "fetchDogs.js".
2) In the sortedAlphabet list replace one of the “o” with “p”.



## Notes:
1) In the "getDaysInMonths.js" file implement the corner case of Leap years.
2) add .DS_store and node modules files to .gitignore
3) Could have kept the select prompt for months but found the entering number more suitable.


