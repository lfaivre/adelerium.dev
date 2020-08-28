export interface TSiteData {
  profile: TProfile;
  links: TSiteLinks;
}

export interface TProfile {
  name: string;
  tag: string;
}

export interface TSiteLinks {
  kd: TLink;
  github: TLink;
  linkedin: TLink;
  resume: TLink;
  email: TLink;
}

export interface TLink {
  text: string;
  url: string;
}
