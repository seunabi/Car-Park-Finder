# Requirements

## User Needs

### User stories
TODO: Write brief user stories to explain how various actors would interact with the system to accomplish a goal.
    Express these in the form from agile development:- As a (role) I want (goal) so that (benefit).
- As a driver, I want to be able to search for available parking spcaes near my destination so that I can save time and avoid being fustrated
- As a tourist, I want to be able to view parking options on an interactive map so that I can easily locate parking near landmarks and famous attractions
- As a tourist, I want clear information about parking prices and restrictions so that I can avoid fines and the overall confusion of it all 
- As a local authority representative, I want insights into parking trends so that I can develop policies to reduce congestion and emissions 

### Actors
TODO: List and describe the actors/users for this product.
- Drivers are the main users (residents of Bristol and commuters who need to find parking efficiently). They may have specific preferences such as how close they can get parking to their destination, cost or availibilty
- Tourists are another type of user. They aren't familiar with the city and therefore its parking facilities. They rely on systems to provide clear and accessible information about parking options
- Maintainer is an example of an internal actor. They are responsible for maintaining the web application and ensuring the operation not only runs smoothly but also nthat the data is accurate. They handle technical issues to ensure reliability for end users
### Use Cases
TODO: Describe each use case (at least one per team member).
    Give each use case a unique ID, e.g. UC1, UC2, ...
    Summarise these using the use-case template below.

| TODO: USE-CASE ID e.g. UC1, UC2, ... | TODO: USE-CASE NAME | 
UC1: The user searches for a car park by entering its name or a part of its name in the search bar 
UC2: The user views details of a car park by clicking on a marker on the map
UC3: The user toggles between the light and dark themes of the application
| -------------------------------------- | ------------------- |
| **Description** | TODO: Goal to be achieved by use case and sources for requirement |
1. Goal: locate available parking in real time sources;  Bristol Open Data AP documnetation, competition analysis (Google Maps)
2. Goal: Filter parking by price, location, and operator Sources: usability testing, user feedback
| **Actors** | TODO: List of actors involved in use case |
- Drivers 
- Tourists
- Maintainer 
- Bristol Open Data API

| **Assumptions** | TODO: Pre/post-conditions if any</td></tr>
- The assumption that you will receive real time data availibility depends on the condition that Bristol Open Data API is operation and the data it provides is accurate and up to date.  If so the system displays real time parking availibilty and pricing without significant delays
- The assumption that the integration of the API is stable relys on the condition that the Bristol Open Data API structure remains unchanged. If so then the system fetches and processess ata seamlessly 
- The assumption that users trust in the data is dependent on whether users believe the system's data is reliable and accurate. As a result, drivers make informed parking decisions 
| **Steps** | TODO: Interactions between actors and system necessary to achieve goal |
1. User inputs parking destination
2. System fetches real time data from Bristol Open Data API 
3. System displays available parking on an interactive map 

1. User selects filter (price, location, type)
2. System updates search results
3. User views refined list of parking spaces/

1. User selects a parking spot 
2. User clicks on the Google Maps hyperlink 
3. Sytem sends coordinates to Google Maps (navigation service)
4. Google Maps provides turn by turn directions
| **Variations** | TODO: OPTIONAL - Any variations in the steps of a use case |
- User has the option to selects light or dark mode 
| **Non-functional** | TODO: OPTIONAL - List of non-functional requirements that the use case must meet. |
- The system must display parking availibilty updatees within 5 seconds of user interaction
| **Issues** | TODO: OPTIONAL - List of issues that remain to be resolved |
- resolve dispreprencies between real tine sensor data and API updates
- ensure trust in data reliability to compete with established app like Google Maps 


TODO: Your Use-Case diagram should include all use-cases.

![Insert your Use-Case Diagram Here](images/usecsase.png)

## Software Requirements Specification
### Functional requirements
TODO: create a list of functional requirements. 
    e.g. "The system shall ..."
    Give each functional requirement a unique ID. e.g. FR1, FR2, ...
    Indicate which UC the requirement comes from.
- FR1: The systen shall display a home page with and introductory information box and preview map (UC2)
- FR2: The system shall render a secondary map on the home mage centered on Bristol (UC2)
- FR3: The system shall display an interactive map with markers for car parks in Bristol (UC2)
- FR4: The system shall allow users to search car parks by name using a text input field (UC1)
- FR5: The system shall dynamically filter the list of car parks as the user types in the search bar (UC1)
- FR6: The system shall display a table with car park details (namee, spaces, type, operator)
- FR7: The system shall load and display real-time parking availibilty data from the Bristol Open Data API (UC1)
- FR8: The system shall support dark/light mode toggling via a user controlled button (UC3)
- FR9: The system shall persist the user's theme preference (dark/light) across sessions using local storage (UC3)
- FR10: The system shall ensure the map and table are responsive across devices (desktop/mobile) (UC3)


### Non-Functional Requirements
TODO: Consider one or more [quality attributes](https://en.wikipedia.org/wiki/ISO/IEC_9126) to suggest a small number of non-functional requirements.
Give each non-functional requirement a unique ID. e.g. NFR1, NFR2, ...

Indicate which UC the requirement comes from.
- NFR1: The system shall load parking availibilty data within 5 seconds of a user request (UC1)
- NFR2: The system shall remain available 99.9% of the time (all)
- The system shall be usabloe by individuals with deisabilities (eye-conditions) (UC3?)
