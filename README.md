# Dijkstra's Algorithm

This is a pathfinding algorithm to find the shortest distance between two points. Google/Apple maps uses this kind of algorithm to produce directions.

The paths are weighted - meaning that some routes are harder to travel on than others. In real-life, this could be due to things such as traffic, slow speed limits, or long distances.

It is [deployed here](https://dijkstras-algorithm.netlify.app/).

It works right now, but I'm refactoring some of it to make it more interesting and interactive.

![Dijkstra_algo_screenshot](https://user-images.githubusercontent.com/40727301/146613280-78b35ff1-3744-45db-81db-6111c4a81278.png)

### Technologies Used

- React
- Jest
- HTML
- CSS
- JavaScript

### Fun tasks required for this project

- Graph data structure to hold the nodes and their connection
  - Implementing the delete method was a challenge, because you have to take into consideration that all connections to the node you're deleting (the data stored in neighboring nodes) must also be deleted. Since it is possible for a connection to be just one direction (e.g. 'A' might be able to travel to 'B', but you cannot go from 'B' to 'A').backtracking
- binary heap to hold the next prefered path
- ui for displaying the graph
  - needs to generate nodes and connections
  - needs to be able to select a starting and ending node
  - needs to have function to graphically display progression of the algorithm's pathfinding
- I have been building the algo & data structures with test-driven-development, which is fun.

## Contributions

Please feel free to fork and contribute!
I have had people watch me build this on discord, which I really enjoy.
