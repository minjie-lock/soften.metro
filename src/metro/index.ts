import { type mergeConfig } from '@react-native/metro-config';

type MetroConfig = Parameters<typeof mergeConfig>;

export default function SoftenNativeMetroC(
  configuration: (metro: MetroConfig[1]) => ReturnType<typeof mergeConfig>
) {
  return configuration({
    transformer: {
      babelTransformerPath: require.resolve('../../src/metro/transformer.ts'),
    }
  })
};
