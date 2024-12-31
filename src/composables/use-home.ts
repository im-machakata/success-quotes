export const useHome = () => {
  const route = useRoute();
  return {
    isHome: route.fullPath == "/"
  }
}