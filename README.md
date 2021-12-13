# Dijkstra's Algorithm

This is a pathfinding algorithm to find the shortest distance between two points. Google/Apple maps uses this kind of algorithm to produce directions.

The paths are weighted - meaning that some routes are harder to travel on than others. In real-life, this could be due to things such as traffic, slow speed limits, or long distances.

![dijkstra_screenshot_2](https://user-images.githubusercontent.com/40727301/145822930-8a42a53c-4c69-4523-a9ae-dfdc05514256.png)

![dijkstra_screenshot](https://user-images.githubusercontent.com/40727301/145822948-64e833ef-20ac-410b-bc2f-62c9f125b766.png)

## How to use
npm start will show display a randomly generated graph. There's no deployment anywhere.

To see what works, run "npm test" to execute my test suites.

### Things needed to be created for this project

* Graph data structure to hold the nodes and their connections
* linked list to hold the path
* queue to hold the next prefered path
* ui for displaying the graph
  * needs to generate nodes and connections
  * needs to be able to select a starting and ending node
  * needs to have function to graphically display progression of the algorithm's pathfinding

## Contributions

Please feel free to fork and contribute!
If this seems complex and confusing, let me know and whenever I'm working on it, I can catch you up on what's going on.
