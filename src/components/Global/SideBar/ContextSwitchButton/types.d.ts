import { SideBarView } from '@adelerium/components/Global/SideBar/types';

export type ContextSwitchButtonProps = {
  type: SideBarView;
  currentView: SideBarView;
  setView: React.Dispatch<React.SetStateAction<SideBarView>>;
  text: string;
};
