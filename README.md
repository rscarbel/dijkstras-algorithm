# Dijkstra's Algorithm

This is a pathfinding algorithm to find the shortest distance between two points. Google/Apple maps uses this kind of algorithm to produce directions.

The paths are weighted - meaning that some routes are harder to travel on than others. In real-life, this could be due to things such as traffic, slow speed limits, or long distances.

I'm working on it right now, but it is [deployed here](https://dijkstras-algorithm.netlify.app/)

![dijkstra_screenshot_2](https://user-images.githubusercontent.com/40727301/145822930-8a42a53c-4c69-4523-a9ae-dfdc05514256.png)

![dijkstra_screenshot](https://user-images.githubusercontent.com/40727301/145822948-64e833ef-20ac-410b-bc2f-62c9f125b766.png)

### Technologies Used
 * React
 * Jest
 * HTML
 * CSS
 * JavaScript

### Fun tasks required to make for this project

* Graph data structure to hold the nodes and their connection
  * Implementing the delete method was a challenge, because you have to take into consideration that all connections to the node you're deleting (the data stored in neighboring nodes) must also be deleted. Since it is possible for a connection to be just one direction (e.g. 'A' might be able to travel to 'B', but you cannot go from 'B' to 'A').
* linked list to hold the path
  * I am implementing it as a doubly-linked-list, just so it's easier to display a backtracking of  
* binary heap to hold the next prefered path
* ui for displaying the graph
  * needs to generate nodes and connections
  * needs to be able to select a starting and ending node
  * needs to have function to graphically display progression of the algorithm's pathfinding
* I have been building the data structures with test-driven-development. This isn't a requirement per se, but definitely a fun experience. I remember when I was first learning about tdd, it was so hard to write tests before I wrote my code. Now I find it easier to write the code when I write the tests first. Since I need to build the data structures in accordance with my particular data needs in this project, it helps to write the test for what I know I'll need to do for this algo to work.

## Contributions

Please feel free to fork and contribute!
I have had people watch me build this on discord, which I really enjoy. It makes me feel like I'm actually competent when I have an audence haha. But I would appreciate it even more if someone forked the code and helped me build it. As much as I enjoy the challenge of building it myself - it can sometimes be just as much of a challenge to understand someone else's implementation.
I could also use another set of eyes to prevent me from writing messy code.
If you'd like to contribute, but it seems complex and confusing, let me know and whenever I'm working on it, I can catch you up on what's going on. If you're here on github reading this - you're probably in the Discord group. I likely don't have Discord up on my screen, but you can find me in the general voice chat.
