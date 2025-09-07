import { type mergeConfig } from '@react-native/metro-config';

type MetroConfig = Parameters<typeof mergeConfig>;

export default function SoftenNativeMetro(
  configuration: (metro: MetroConfig[1]) => ReturnType<typeof mergeConfig>
) {
  const ext = process.env.BUNDLE_EXT || 'js';
  const babelTransformerPath =
    ext === 'mjs'
      ? require.resolve('./transformer.js')
      : require.resolve('./transformer.cjs');

  return configuration({
    transformer: {
      babelTransformerPath,
    }
  });
};
