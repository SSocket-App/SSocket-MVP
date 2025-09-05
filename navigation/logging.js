import { useNavigationState } from '@react-navigation/native';
import { useEffect } from 'react';

/**
 * Hook to log current screen and navigation path whenever navigation state changes.
 * Logs messages like:
 *   [NAV] now at: FeedPage  path: AuthStack > AppTabs > FeedStack > FeedPage
 */
export default function useNavLogger(tag = 'NAV') {
  const state = useNavigationState(state => state);
  useEffect(() => {
    if (!state) return;
    function buildPath(navState, path = []) {
      if (!navState) return path;
      const { routes, index } = navState;
      if (!routes || index == null) return path;
      const current = routes[index];
      path.push(current.name);
      if (current.state) {
        return buildPath(current.state, path);
      }
      return path;
    }
    const path = buildPath(state, []).join(' > ');
    const currentRoute = state.routes[state.index];
    if (currentRoute && currentRoute.name) {
      // Print a simple log with current route name and full path
      console.log(`[${tag}] now at: ${currentRoute.name}  path: ${path}`);
    }
  }, [state, tag]);
  return null;
}
