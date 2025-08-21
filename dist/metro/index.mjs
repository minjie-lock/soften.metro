function SoftenNativeMetroC(configuration) {
    return configuration({
        transformer: {
            babelTransformerPath: require.resolve('../../src/metro/transformer.ts')
        }
    });
}
export { SoftenNativeMetroC as default };
