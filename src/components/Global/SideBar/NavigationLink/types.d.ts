import {
  SideBarQuery_sideBarData_externalLinks as ExternalLinkData,
  SideBarQuery_sideBarData_internalLinks as InternalLinkData,
} from '@adelerium/@types/__generated__/SideBarQuery';
import { SideBarView } from '@adelerium/components/Global/SideBar/types';

export type NavigationLinkProps = { type: SideBarView; data: InternalLinkData | ExternalLinkData };
