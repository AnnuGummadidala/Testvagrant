# Testvagrant 

In-Memory Recently Played Songs Store:
This project implements an in-memory store for recently played songs that can accommodate N songs per user, with a fixed initial capacity. The store has the capability to store a list of song-user pairs, with each song linked to a user. It also provides functionality to fetch recently played songs based on the user and automatically eliminates the least recently played songs when the store becomes full.

Functionality:
Stores recently played songs for each user.
Keeps track of the order of songs played by each user.
Provides methods to fetch recently played songs for a given user.
Automatically manages the capacity by removing the least recently played songs when the store becomes full.

Example:
Illustration of how the store works with an initial capacity of 3:

User plays 3 songs - S1, S2, and S3.
The playlist would look like -> S1, S2, S3.
When S4 song is played:
S1, S2, S3 -> S2, S3, S4.
When S2 song is played:
S2, S3, S4 -> S3, S4, S2.
When S1 song is played:
S3, S4, S2 -> S4, S2, S1.


Installation:
1. Install node.js into the system (https://nodejs.org/en/download).
2. clone the repository into the system.
3. Use visual studio code IDE.
4. "ctrl+shift+`" will open a Terminal.
5. Use "npm install" command to install the node_modules.
6. Use "npm test" to run the test cases.

Verify reports:
1. After test cases are run results are displayed in the terminal as well HTML file will be created.
2. After test cases are run a folder named Mochawsome-report will be created there we can find mochawesome.html file to view the reults.


