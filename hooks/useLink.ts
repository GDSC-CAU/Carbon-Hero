interface LinkData {
  sceneName?: string;
  nextPage?: string;
}

interface SceneResponse {
  isError: boolean;
  isSuccess: boolean;
  sceneData: LinkData;
}

const useLink = (defaultData?: LinkData): SceneResponse => {
  const isError = false;
  const isSuccess = true;
  const sceneData: LinkData = {
    sceneName: defaultData?.sceneName || 'Landing',
    nextPage: defaultData?.nextPage || 'story'
  }

  return {
    isError,
    isSuccess,
    sceneData,
  }
}

export default useLink;