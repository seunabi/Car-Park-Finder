# Testing

## Test Plan
TODO: Describe any manual and automated (unit) tests. Uniquely identify each test case. Include prerequisites and test data.

TestID: MT1 -  manual  -  to verify that the search functionality correctly filters car parks based on user input 
prerequisities: the application is running and car park data is loaded 
Test data: 
- car park name: "Trenchard Street" 
- partial name: "Tren"
- non-existent name: XYZ Car Park
Expected result: The search results accuraxtely reflect the search criteria 


TestID: MT2   -   manual   -   to verify that clicking on a car park marker displays the correct details 
prerequisities: the application is running anf the map with car markers is displayed
Test data:
Any car park marker on the map
Expected result: The popup window displays the correct details for the selected car park 

TestID: MT3   - manual    -    verify that the theme toggle button correctly switches betwen light and dark themes
prerequisites: the application is running 
test data: n/a
expected result: the theme is toggled correctly and the user preference is saved i local storage 
Test Runs
TODO: For each test described above, indicate the current status. 
Create a requirements traceability matrix to validate the completeness of the product.




| Use-Case ID | Requirement ID | Test Case      | Status |
| ---UC1----- | ------R1.1---- |      MT1       | Pass |
| ---UC1----- | ------R1.2---- |      MT1       | Pass |
| ---UC2----- | ------R2.1---- |      MT2       | Pass |
| ---UC2----- | ------R2.2---- |      MT2       | Pass |


TODO: Add rows for each test, current status is eg. pass/fail
