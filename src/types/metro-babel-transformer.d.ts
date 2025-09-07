declare module '@react-native/metro-babel-transformer' {
  import { TransformOptions } from '@babel/core';

  interface TransformerResult {
    ast?: any;
    code?: string;
    map?: string;
    metadata: Record<string, any>;
  }

  interface Transformer {
    transform(opts: {
      src: string;
      filename: string;
      options: TransformOptions;
    }): Promise<TransformerResult>;
  }

  const BabelTransformer: Transformer;
  export default BabelTransformer;
}