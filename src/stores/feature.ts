import create from 'zustand';

type Feature = Record<string, unknown>;

type FeatureStore = {
  features: Feature;
  getFeature: <T>(key: string) => T;
  setFeatures: (features: Feature) => void;
  clearFeatures: () => void;
};

export const useFeatureStore = create<FeatureStore>((set, get) => ({
  features: {},
  getFeature: <T>(key: string) => get().features[key] as T,
  setFeatures: (features) => set((state) => ({ features })),
  clearFeatures: () => set((state) => ({ features: {} })),
}));
