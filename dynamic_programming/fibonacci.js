// Compute the nth Fibonacci number
// We assume that n >= 0
function fib(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

/**
 * Analyze the first solution:
 *                            fib(4)
 *                 fib(3)                fib(2)
 *           fib(2)     fib(1)     fib(1)     fib(0)
 *      fib(1)   fib(0)
 *  
 * Runtime: We know the depth of the recursive call (the height of the tree) will be n (this goes for each node)
 *              -because we recursively call our function with n-1 each time.
 *              -We also know that each recursive call results in two more calls
 * 
 *  2^n-1 calls: 1 + 2 + 4 + 8 + ... + 2^n-1 function calls or 2^0 + 2^1 + ... + 2^n-1
 *  = Reduces to O(2^n) for Bi O notation because the n-1 constant is removed.
 * 
 * Because we're using recursion, we can determine whether this problem is a potential candidate for dynamic programming.
 *  1. It has optimal substructure:
 *      -If we solve one of the SUBPROBLEMS, such as fib(2), we can use these solutions to solve GREATER values of n.
 *  2. It has Overlapping subproblems:
 *      -Because fib(2) gets called multiple times (twice for fib(4)), it would be much more efficient to compute fib(2) ONLY ONCE.
 * 
 * ^^ Because 1. and 2. are satisfied, we KNOW we can improve our problem by using dynamic programming. Proceed.
 */

/**
 * Find the subproblems
 * * In this case, for a function call of fib(n), our TWO SUBPROBLEMS are fib(n-1) and fib(n-2)
 * ! They are the two subproblems whose RESULTS WE NEED IN ORDER TO SOLVE OUR PROBLEM.
 * 
 * ! They are also the same subproblems that are being >CALLED MULTIPLE TIMES< with the >SAME INPUT<.
 *          -fib(n-1) and fib(n-2) will be used through the recursion chain.
 * !             -Therefore, we should CACHE the results of these subproblems.
 * 
 * ! Before this step (CACHING), its vital to understand and be clear of the MEANING of the subproblems.
 *      -here, fib(n-1) is just the n-1 Fibonacci number.
 *      -Understanding the subproblems ALLOW us to add a cache to our original solution and to obtain a top-down dp solution.
 * 
 * Caching will for fib(n), the Fibonacci value is computed only once for each value from 1 to n.
 *  -This makes it have linear time compleity O(n) vs O(2^n)
 * 
 * * In terms of the space complexity, we have to use O(n) space to store the cache. 
 * * However, since we are making a recursive call that goes n deep and uses O(n) stack space already, 
 * * it does not affect our "asymptotic space complexity".
 *      -"def - asymptotic space complexity: The LIMITING behavior of the use of memory space of an 
 *              algorithm when the size of the problem goes to infinity.
 * */

// Compute the nth Fibonacci number recursively. 
// Optimized by CACHING subproblem results public int 
function fib(n) {
    if (n < 2) return n;
    // Create CACHE
    let cache = []
    // initialize cache to -1. 
    //if n = 10, we want an array of -1's of length 11. 
    // This will account for the leading 0 and 1 at the beginning of array.
    for (let i = 0; i < n + 1; i++) {
        cache[i] = -1;
    }
    // Fill initial values in cache
    cache[0] = 0;
    cache[1] = 1;

    return fib_helper(n, cache);
}

function fib_helper(n, cache) {
    // If value is set in CACHE, return
    if (cache[n] >= 0) return cache[n];
    // Compute and add to CACHE before returning
    cache[n] = fib_helper(n - 1, cache) + fib_helper(n - 2, cache);
    return cache[n];
}

/**
 * Turn the solution around
 * * 1. Start with the base cases 
 * * 2. BUILD UP the solution from there by computing the results of each subsequent subproblem until we reach our result.
 * 
 * Bottom-up approach:
 * 1. base cases are fib(0) = 0 and fib(1) = 1. 
 * 2. From these two values, we can BUILD UP and compute the next largest Fibonacci number, fib(2) = fib(0) + fib(1). 
 *      -Once we have the value of fib(2), we can BUILD UP and calculate fib(3) etc.
 *      -As we successively compute each Fibonacci number, the previous values are saved and referred to as necessary, 
 *       eventually BUILDing UP to and reaching fib(n)
 * 
 * * we iterate through all of the numbers from 0 to n once, our time complexity will be O(n).
 * * Our space will also be O(n): we create a 1D array from 0 to n.
 * * This makes our current solution comparable to the top-down solution, although without recursion.
 */

// Compute the nth Fibonacci number iteratively
function fib(n) {
    if (n == 0) return 0;
    // Initialize cache
    let cache = [];
    cache[0] = 0;
    cache[1] = 1;

    // Fill cache iteratively
    for (let i = 2; i <= n; i++) {
        cache[i] = cache[i - 1] + cache[i - 2];
    }
    return cache[n];
}