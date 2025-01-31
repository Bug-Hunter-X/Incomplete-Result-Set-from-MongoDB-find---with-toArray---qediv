# MongoDB find() with toArray() - Handling Large Result Sets

This repository demonstrates a common issue encountered when using MongoDB's `find()` method with the `toArray()` function.  When dealing with large datasets, `toArray()` may not retrieve the complete result set due to memory constraints, leading to incomplete data. The solution provided illustrates using `forEach()` for iterative processing to address this limitation.

## Problem Description

The `bug.js` file contains code that uses `find()` and `toArray()` to fetch documents.  If the collection has a high number of matching documents, only a subset might be returned. This is because `toArray()` loads all the results into memory at once, which can exceed available resources.

## Solution

The `bugSolution.js` file offers a solution using the cursor's `forEach()` method.  `forEach()` processes documents individually, without loading the entire dataset into memory. This ensures that even for very large result sets, all documents are handled.