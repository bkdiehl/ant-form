import { MenuItem } from 'src/types';
import create from 'zustand';

type Program = {
  id: number;
  key: string;
  features: string[];
  menuItems: MenuItem[];
};

type ProgramStore = {
  program?: Program;
  setProgram: (program: Program) => void;
  hasFeature: (key: string) => boolean;
};

export const useProgramStore = create<ProgramStore>((set, get) => ({
  program: undefined,
  setProgram: (program) => set((state) => ({ program })),
  hasFeature: (key) => get().program?.features.includes(key) ?? false,
}));
