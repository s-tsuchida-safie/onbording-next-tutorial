export type HomePageState = {
  count: number
}

export const getInitialHomePageState = (): HomePageState => {
  return {
    count: 0,
  }
}
