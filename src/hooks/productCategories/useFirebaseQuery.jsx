import { useQuery } from "@tanstack/react-query";

/**
 * 
 * @param {Object} params
 * @param {Array|string} params.queryKey
 * @param {Function} params.queryFn 
 * @param {Object} [params.options] 
 */
export const useFirebaseQuery = ({ queryKey, queryFn, options = {} }) => {
  return useQuery({
    queryKey: Array.isArray(queryKey) ? queryKey : [queryKey],
    queryFn,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    ...options,
  });
};
