# PathfindingVisualizer

Welcome to Pathfinding Visualizer! This is a small app I built after having a spike of facination and curiosity towards pathfinding algorithms, caused by prticipating in a codebattle event. I wanted to visualize the different one's I've researched as well as try to engineer one myself.

[Try the App](https://warferton.github.io/PathfindingVisualizer/)

## Behold the Algorithms

List of algrotihms to be implemented in this application( ✅ - implemented | ⚠️ - in process | ❌ - not implemented)

| №   | Algorithm                           | Type            | Implementation |
| --- | ----------------------------------- | --------------- | -------------- |
| 1   | Dijkstra's                          | Weighted ⚓     | ✅             |
| 2   | A-star                              | Weighted ⚓     | ✅             |
| 3   | BFS                                 | Not Weighted 🏃 | ✅             |
| 4   | DFS                                 | Not Weighted 🏃 | ✅             |
| 5   | Consecutive DFS                     | Not Weighted 🏃 | ✅             |
| 6   | D-Star Lite                         | Weighted ⚓     | ⚠️             |
| 7   | IDA-Star                     | Weighted ⚓     |  ✅            |
| 8   | **Catapult** / **Trebuchet** Search | Weighted ⚓     | ❌             |

## A Brief Explanation of the Algorithms Used

### Dijkstra's Pathfinding Algorithm
The father of all the shortest path pathfinding algorithms, it utilizes the mechanics of path cost to determine the shortest path to the goal. Was conceived by Edsger W. Dijkstra in 1956. The algorithm exists in many variants, the one I implemented is Dijkstra's original algorithm to find the shortest path between two given nodes. It always provides the shortest path, but has to do lots of iterating through the neighbouring nodes until the goal-node is found. 

### A* Pathfinding Algorithm
Is an extension of the Dijkstra's algorithm, that utilizes heuristics and approximate distance calculations to determine the shortest path to the goal. First published by Peter Hart, Nils Nilsson and Bertram Raphael of Stanford Research Institute in 1968. It always provides the shortest path and the number of nodes that are visited is signifficantly less then in Dijkstra's.

### Breadth-First Search (BFS) Algorithm
A standard algorithm for tree and graph traversals. The algorithm iterates through all the neighbours of the start node by level untill the goal is reached. The shortest path to the goal is not guarenteed.

### Depth-First Search (DFS) Algorithm
Another standard algorithm for tree and graph traversals. The algorithm starts at the root node and explores as far as possible along each branch before backtracking.
A version of depth-first search was investigated in the 19th century by French mathematician Charles Pierre Trémaux.

### Consecutive DFS
Same DFS Algorithm but it shows the worst case scenario when a graph structure resembles a linked list.

### Iterative-Deepening A* (IDA*) Algorithm
It is a variant of iterative deepening depth-first search that borrows the idea to use a heuristic function to evaluate the remaining cost to get to the goal from the A* search algorithm. Since it is a depth-first search algorithm, its memory usage is lower than in A*, but unlike ordinary iterative deepening search, it concentrates on exploring the most promising nodes and thus does not go to the same depth everywhere in the search tree.

### D* Lite
D* Lite implements the same behavior as D* or Focused D*, but based on Lifelong Planning A*, which was introduced by Koenig and Likhachev few years earlier. It is simpler to understand and can be implemented. Performance-wise, it is as good as or better than Focused D*. The algorithm can adapt to changing environment and correct its path accordingly.

### Catapult
The algorithm I concepted and am still working on.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
