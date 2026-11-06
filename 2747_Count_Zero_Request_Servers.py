#Sorting + Sliding Window + HashMap
class Solution:
    def countServers(self, n: int, logs: List[List[int]], 
                     x: int, queries: List[int]) -> List[int]:

        logs.sort(key=lambda ele: ele[1])

        sorted_queries = sorted(
            [(q, i) for i, q in enumerate(queries)]
        )

        result = [0] * len(queries)

        server_count = {}
        left = 0
        right = 0
        active_servers = 0

        for q, index in sorted_queries:

            start = q - x

            # Add logs whose time is <= query time
            while right < len(logs) and logs[right][1] <= q:
                server_id = logs[right][0]

                server_count[server_id] = server_count.get(server_id, 0) + 1

                if server_count[server_id] == 1:
                    active_servers += 1

                right += 1

            # Remove logs outside the current window
            while left < right and logs[left][1] < start:
                server_id = logs[left][0]

                server_count[server_id] -= 1

                if server_count[server_id] == 0:
                    active_servers -= 1
                    del server_count[server_id]

                left += 1

            result[index] = n - active_servers

        return result
