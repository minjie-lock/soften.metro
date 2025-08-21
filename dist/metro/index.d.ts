import { type mergeConfig } from '@react-native/metro-config';
type MetroConfig = Parameters<typeof mergeConfig>;
export default function SoftenNativeMetroC(configuration: (metro: MetroConfig[1]) => ReturnType<typeof mergeConfig>): import("metro-config").ConfigT;
export {};
