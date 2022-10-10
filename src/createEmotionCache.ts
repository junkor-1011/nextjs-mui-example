import createCache, { EmotionCache } from '@emotion/cache';

const createEmotionCache = (): EmotionCache => createCache({ key: 'next' });
export default createEmotionCache;
